/**
 * Restaurante - Lógica da página
 */

// Elementos do DOM
const loginScreen = document.getElementById('login-screen');
const mainScreen = document.getElementById('main-screen');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const restaurantName = document.getElementById('restaurant-name');

// Estatísticas
const statCafe = document.getElementById('stat-cafe');
const statAlmoco = document.getElementById('stat-almoco');
const statJanta = document.getElementById('stat-janta');

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabScanner = document.getElementById('tab-scanner');
const tabHistorico = document.getElementById('tab-historico');

// Scanner
const readerDiv = document.getElementById('reader');
const scanStatus = document.getElementById('scan-status');
const cameraError = document.getElementById('camera-error');
const cameraErrorMsg = document.getElementById('camera-error-msg');
const btnPermitirCamera = document.getElementById('btn-permitir-camera');
const cameraLoading = document.getElementById('camera-loading');

// Modal de confirmação
const scanConfirm = document.getElementById('scan-confirm');
const confirmName = document.getElementById('confirm-name');
const confirmId = document.getElementById('confirm-id');
const checkCafe = document.getElementById('check-cafe');
const checkAlmoco = document.getElementById('check-almoco');
const checkJanta = document.getElementById('check-janta');
const cancelConfirm = document.getElementById('cancel-confirm');
const submitConfirm = document.getElementById('submit-confirm');

// Modal de resultado
const scanResult = document.getElementById('scan-result');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const closeResult = document.getElementById('close-result');

// Dados do funcionário escaneado (temporário)
let scannedEmployee = null;

// Histórico
const historicoList = document.getElementById('historico-list');

// Variáveis
let html5QrCode = null;
let currentUser = null;
let isScanning = false;

// Verificar login ao carregar
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
});

// Verificar login
function checkLogin() {
    const userData = localStorage.getItem(STORAGE_KEYS.RESTAURANTE);

    if (userData) {
        currentUser = JSON.parse(userData);
        showMainScreen();
    } else {
        showLoginScreen();
    }
}

// Mostrar tela de login
function showLoginScreen() {
    loginScreen.classList.remove('hidden');
    mainScreen.classList.add('hidden');
    stopScanner();
}

// Mostrar tela principal
function showMainScreen() {
    loginScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');

    restaurantName.textContent = currentUser.restauranteNome || 'Restaurante';

    // Carregar estatísticas e histórico
    loadStats();
    loadHistorico();

    // Iniciar scanner
    startScanner();
}

// Handler do login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value;

    loginError.classList.add('hidden');

    try {
        // Buscar usuário do restaurante no Firestore
        const snapshot = await db.collection('usuarios_restaurante')
            .where('login', '==', login)
            .get();

        if (snapshot.empty) {
            showLoginError('Login ou senha incorretos');
            return;
        }

        const usuario = snapshot.docs[0];
        const data = usuario.data();

        // Verificar senha
        if (data.senha !== hashSenha(senha)) {
            showLoginError('Login ou senha incorretos');
            return;
        }

        // Login bem-sucedido
        currentUser = {
            id: usuario.id,
            nome: data.nome,
            login: data.login,
            restauranteId: data.restauranteId,
            restauranteNome: data.restauranteNome || 'Restaurante'
        };

        localStorage.setItem(STORAGE_KEYS.RESTAURANTE, JSON.stringify(currentUser));
        showMainScreen();

    } catch (error) {
        console.error('Erro no login:', error);
        showLoginError('Erro ao fazer login. Tente novamente.');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.RESTAURANTE);
    currentUser = null;
    showLoginScreen();
    loginForm.reset();
});

// Mostrar erro de login
function showLoginError(message) {
    loginError.textContent = message;
    loginError.classList.remove('hidden');
}

// Tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;

        // Atualizar tabs ativas
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Mostrar/esconder conteúdo
        if (tabName === 'scanner') {
            tabScanner.classList.remove('hidden');
            tabHistorico.classList.add('hidden');
            startScanner();
        } else {
            tabScanner.classList.add('hidden');
            tabHistorico.classList.remove('hidden');
            stopScanner();
            loadHistorico();
        }
    });
});

// Iniciar scanner
function startScanner() {
    if (isScanning || !readerDiv) return;

    // Esconder erro anterior e mostrar loading
    if (cameraError) cameraError.classList.add('hidden');
    if (cameraLoading) cameraLoading.classList.remove('hidden');
    scanStatus.classList.add('hidden');

    html5QrCode = new Html5Qrcode("reader");

    const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
    };

    html5QrCode.start(
        { facingMode: "environment" },
        config,
        onScanSuccess,
        onScanFailure
    ).then(() => {
        isScanning = true;
        if (cameraLoading) cameraLoading.classList.add('hidden');
        if (cameraError) cameraError.classList.add('hidden');
    }).catch((err) => {
        console.error('Erro ao iniciar scanner:', err);
        if (cameraLoading) cameraLoading.classList.add('hidden');
        showCameraError(err.message || 'Erro ao acessar câmera. Verifique as permissões.');
    });
}

// Mostrar erro da câmera com botão
function showCameraError(message) {
    if (cameraError && cameraErrorMsg) {
        cameraErrorMsg.textContent = message;
        cameraError.classList.remove('hidden');
    }
    scanStatus.classList.add('hidden');
}

// Solicitar permissão da câmera
async function requestCameraPermission() {
    // Mostrar loading
    if (cameraError) cameraError.classList.add('hidden');
    if (cameraLoading) cameraLoading.classList.remove('hidden');

    try {
        // Solicitar permissão diretamente
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });

        // Parar o stream (só queríamos a permissão)
        stream.getTracks().forEach(track => track.stop());

        // Tentar iniciar o scanner novamente
        startScanner();
    } catch (err) {
        console.error('Erro ao solicitar permissão:', err);
        if (cameraLoading) cameraLoading.classList.add('hidden');

        let mensagem = 'Permissão negada. ';
        if (err.name === 'NotAllowedError') {
            mensagem += 'Vá em Configurações do navegador e permita o acesso à câmera.';
        } else if (err.name === 'NotFoundError') {
            mensagem += 'Nenhuma câmera encontrada no dispositivo.';
        } else {
            mensagem += err.message || 'Tente novamente.';
        }

        showCameraError(mensagem);
    }
}

// Event listener para o botão de permitir câmera
if (btnPermitirCamera) {
    btnPermitirCamera.addEventListener('click', requestCameraPermission);
}

// Parar scanner
function stopScanner() {
    if (html5QrCode && isScanning) {
        html5QrCode.stop().then(() => {
            isScanning = false;
        }).catch((err) => {
            console.error('Erro ao parar scanner:', err);
        });
    }
}

// Sucesso ao escanear
async function onScanSuccess(decodedText) {
    // Pausar scanner temporariamente
    if (html5QrCode && isScanning) {
        await html5QrCode.pause();
    }

    try {
        // Parse dos dados do QR (formato: login|refeicao|data)
        const parts = decodedText.split('|');

        if (parts.length < 3) {
            throw new Error('QR Code inválido');
        }

        const [login, tipo, data] = parts;

        // Buscar nome do funcionário pelo login
        let funcionarioNome = login;
        const funcSnapshot = await db.collection('funcionarios')
            .where('login', '==', login)
            .get();

        if (!funcSnapshot.empty) {
            funcionarioNome = funcSnapshot.docs[0].data().nome;
        }

        // Guardar dados do funcionário escaneado
        scannedEmployee = {
            login,
            nome: funcionarioNome,
            tipoOriginal: tipo,
            data
        };

        // Mostrar modal de confirmação
        showConfirmModal(funcionarioNome, login, tipo);

    } catch (error) {
        console.error('Erro ao processar QR:', error);
        showScanResult(
            'Erro',
            'QR Code inválido ou erro ao registrar.'
        );
    }
}

// Mostrar modal de confirmação
function showConfirmModal(nome, login, tipoSugerido) {
    confirmName.textContent = nome;
    confirmId.textContent = `ID: ${login}`;

    // Resetar checkboxes
    checkCafe.checked = false;
    checkAlmoco.checked = false;
    checkJanta.checked = false;

    // Pré-selecionar baseado no tipo sugerido pelo QR
    if (tipoSugerido === 'cafe') checkCafe.checked = true;
    else if (tipoSugerido === 'almoco') checkAlmoco.checked = true;
    else if (tipoSugerido === 'janta') checkJanta.checked = true;

    scanConfirm.classList.add('active');
}

// Cancelar confirmação
cancelConfirm.addEventListener('click', () => {
    scanConfirm.classList.remove('active');
    scannedEmployee = null;

    // Retomar scanner
    if (html5QrCode && isScanning) {
        html5QrCode.resume();
    }
});

// Confirmar e registrar refeições
submitConfirm.addEventListener('click', async () => {
    if (!scannedEmployee) return;

    const refeicoesSelecionadas = [];
    if (checkCafe.checked) refeicoesSelecionadas.push('cafe');
    if (checkAlmoco.checked) refeicoesSelecionadas.push('almoco');
    if (checkJanta.checked) refeicoesSelecionadas.push('janta');

    if (refeicoesSelecionadas.length === 0) {
        alert('Selecione pelo menos uma refeição');
        return;
    }

    try {
        // Registrar cada refeição selecionada
        for (const tipo of refeicoesSelecionadas) {
            const refeicaoData = {
                funcionarioId: scannedEmployee.login,
                funcionarioNome: scannedEmployee.nome,
                tipo,
                data: scannedEmployee.data,
                horaEscaneamento: new Date().toISOString(),
                restauranteId: currentUser.restauranteId,
                restauranteNome: currentUser.restauranteNome,
                escaneadoPor: currentUser.nome
            };

            await db.collection('refeicoes').add(refeicaoData);
        }

        // Fechar modal de confirmação
        scanConfirm.classList.remove('active');

        // Montar mensagem de sucesso
        const refeicoesNomes = refeicoesSelecionadas.map(t => getNomeRefeicao(t)).join(', ');

        // Mostrar modal de sucesso
        showScanResult(
            'Refeição Registrada!',
            `${scannedEmployee.nome} (${scannedEmployee.login}) - ${refeicoesNomes}`
        );

        // Atualizar estatísticas
        loadStats();

        // Limpar dados temporários
        scannedEmployee = null;

    } catch (error) {
        console.error('Erro ao registrar refeições:', error);
        scanConfirm.classList.remove('active');
        showScanResult(
            'Erro',
            'Erro ao registrar refeições. Tente novamente.'
        );
    }
});

// Falha ao escanear (silenciosa)
function onScanFailure(error) {
    // Ignorar erros de leitura normal
}

// Mostrar resultado do scan
function showScanResult(title, message) {
    resultTitle.textContent = title;
    resultMessage.textContent = message;
    scanResult.classList.add('active');
}

// Fechar modal de resultado
closeResult.addEventListener('click', () => {
    scanResult.classList.remove('active');

    // Retomar scanner
    if (html5QrCode && isScanning) {
        html5QrCode.resume();
    }
});

// Carregar estatísticas do dia
async function loadStats() {
    if (!currentUser) return;

    const hoje = getDataHoje();

    try {
        const snapshot = await db.collection('refeicoes')
            .where('restauranteId', '==', currentUser.restauranteId)
            .where('data', '==', hoje)
            .get();

        let cafe = 0, almoco = 0, janta = 0;

        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.tipo === 'cafe') cafe++;
            else if (data.tipo === 'almoco') almoco++;
            else if (data.tipo === 'janta') janta++;
        });

        statCafe.textContent = cafe;
        statAlmoco.textContent = almoco;
        statJanta.textContent = janta;

    } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
    }
}

// Carregar histórico do dia
async function loadHistorico() {
    if (!currentUser) return;

    const hoje = getDataHoje();

    historicoList.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const snapshot = await db.collection('refeicoes')
            .where('restauranteId', '==', currentUser.restauranteId)
            .where('data', '==', hoje)
            .orderBy('horaEscaneamento', 'desc')
            .limit(50)
            .get();

        if (snapshot.empty) {
            historicoList.innerHTML = `
                <div class="empty-state">
                    <div class="icon">📋</div>
                    <p>Nenhuma refeição registrada hoje</p>
                </div>
            `;
            return;
        }

        let html = '<ul class="list">';

        snapshot.forEach(doc => {
            const data = doc.data();
            const hora = formatarHora(new Date(data.horaEscaneamento));
            const badgeClass = getBadgeClass(data.tipo);

            html += `
                <li class="list-item">
                    <div class="list-item-info">
                        <div class="name">${data.funcionarioNome}</div>
                        <div class="details">${hora}</div>
                    </div>
                    <span class="list-item-badge ${badgeClass}">
                        ${getNomeRefeicao(data.tipo)}
                    </span>
                </li>
            `;
        });

        html += '</ul>';
        historicoList.innerHTML = html;

    } catch (error) {
        console.error('Erro ao carregar histórico:', error);
        historicoList.innerHTML = `
            <div class="alert alert-danger">
                Erro ao carregar histórico
            </div>
        `;
    }
}

// Helpers
function getNomeRefeicao(tipo) {
    const nomes = {
        'cafe': 'Café',
        'almoco': 'Almoço',
        'janta': 'Janta'
    };
    return nomes[tipo] || tipo;
}

function getBadgeClass(tipo) {
    const classes = {
        'cafe': 'badge-cafe',
        'almoco': 'badge-almoco',
        'janta': 'badge-janta'
    };
    return classes[tipo] || '';
}
