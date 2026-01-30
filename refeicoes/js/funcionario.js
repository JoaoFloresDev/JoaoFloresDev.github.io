/**
 * Funcionário - Lógica da página
 */

// Elementos do DOM
const loginScreen = document.getElementById('login-screen');
const qrScreen = document.getElementById('qr-screen');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');

// Elementos do QR
const userName = document.getElementById('user-name');
const greeting = document.getElementById('greeting');
const mealType = document.getElementById('meal-type');
const qrUserName = document.getElementById('qr-user-name');
const qrDate = document.getElementById('qr-date');
const qrcodeDiv = document.getElementById('qrcode');

// Variável para armazenar instância do QR Code
let qrCodeInstance = null;

// Verificar se está logado ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
});

// Função para verificar login
function checkLogin() {
    const userData = localStorage.getItem(STORAGE_KEYS.FUNCIONARIO);

    if (userData) {
        const user = JSON.parse(userData);
        showQRScreen(user);
    } else {
        showLoginScreen();
    }
}

// Mostrar tela de login
function showLoginScreen() {
    loginScreen.classList.remove('hidden');
    qrScreen.classList.add('hidden');
}

// Mostrar tela do QR Code
function showQRScreen(user) {
    loginScreen.classList.add('hidden');
    qrScreen.classList.remove('hidden');

    // Atualizar informações do usuário
    userName.textContent = user.nome;
    qrUserName.textContent = user.nome;

    // Atualizar data
    qrDate.textContent = formatarData(new Date());

    // Atualizar tipo de refeição e saudação
    updateMealInfo();

    // Gerar QR Code
    generateQRCode(user);

    // Atualizar a cada minuto (para mudar a refeição no horário certo)
    setInterval(() => {
        updateMealInfo();
        generateQRCode(user);
    }, 60000);
}

// Atualizar informações da refeição
function updateMealInfo() {
    const refeicao = getTipoRefeicao();

    greeting.textContent = refeicao.saudacao;

    if (refeicao.proximo) {
        mealType.textContent = `Próxima: ${refeicao.nome}`;
        mealType.style.color = '#7f8c8d';
    } else {
        mealType.textContent = refeicao.nome;
        mealType.style.color = '#3498db';
    }
}

// Gerar QR Code
function generateQRCode(user) {
    const refeicao = getTipoRefeicao();
    const data = getDataHoje();

    // Dados do QR Code (formato compacto: id|nome|refeicao|data)
    const qrData = `${user.id}|${user.nome}|${refeicao.tipo}|${data}`;

    // Limpar QR anterior
    qrcodeDiv.innerHTML = '';

    // Usar API externa para gerar QR Code (mais confiável)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;

    const img = document.createElement('img');
    img.src = qrUrl;
    img.alt = 'QR Code';
    img.style.width = '200px';
    img.style.height = '200px';

    qrcodeDiv.appendChild(img);
}

// Handler do formulário de login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value;

    // Esconder erro anterior
    loginError.classList.add('hidden');

    try {
        // Buscar funcionário no Firestore
        const snapshot = await db.collection('funcionarios')
            .where('login', '==', login)
            .get();

        if (snapshot.empty) {
            showError('Login ou senha incorretos');
            return;
        }

        const funcionario = snapshot.docs[0];
        const data = funcionario.data();

        // Verificar senha
        if (data.senha !== hashSenha(senha)) {
            showError('Login ou senha incorretos');
            return;
        }

        // Login bem-sucedido
        const userData = {
            id: funcionario.id,
            nome: data.nome,
            login: data.login
        };

        // Salvar no localStorage
        localStorage.setItem(STORAGE_KEYS.FUNCIONARIO, JSON.stringify(userData));

        // Mostrar tela do QR
        showQRScreen(userData);

    } catch (error) {
        console.error('Erro no login:', error);
        showError('Erro ao fazer login. Tente novamente.');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.FUNCIONARIO);
    showLoginScreen();

    // Limpar formulário
    loginForm.reset();
});

// Mostrar erro
function showError(message) {
    loginError.textContent = message;
    loginError.classList.remove('hidden');
}
