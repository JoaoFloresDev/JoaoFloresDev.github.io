/**
 * ADM - Lógica da página
 */

// Elementos do DOM
const loginScreen = document.getElementById('login-screen');
const mainScreen = document.getElementById('main-screen');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const adminName = document.getElementById('admin-name');

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabFuncionarios = document.getElementById('tab-funcionarios');
const tabRestaurantes = document.getElementById('tab-restaurantes');
const tabRelatorios = document.getElementById('tab-relatorios');

// Formulários
const formFuncionario = document.getElementById('form-funcionario');
const formRestaurante = document.getElementById('form-restaurante');
const formUsuarioRestaurante = document.getElementById('form-usuario-restaurante');

// Listas
const listaFuncionarios = document.getElementById('lista-funcionarios');
const listaRestaurantes = document.getElementById('lista-restaurantes');

// Relatórios
const relatorioData = document.getElementById('relatorio-data');

// Variáveis
let currentAdmin = null;

// Verificar login ao carregar
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();

    // Definir data de hoje no relatório
    relatorioData.value = getDataHoje();
    relatorioData.addEventListener('change', loadRelatorios);
});

// Verificar login
function checkLogin() {
    const userData = localStorage.getItem(STORAGE_KEYS.ADMIN);

    if (userData) {
        currentAdmin = JSON.parse(userData);
        showMainScreen();
    } else {
        showLoginScreen();
    }
}

// Mostrar tela de login
function showLoginScreen() {
    loginScreen.classList.remove('hidden');
    mainScreen.classList.add('hidden');
}

// Mostrar tela principal
function showMainScreen() {
    loginScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');

    adminName.textContent = currentAdmin.nome;

    // Carregar dados iniciais
    loadFuncionarios();
    loadRestaurantes();
    loadRelatorios();
}

// Handler do login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value;

    loginError.classList.add('hidden');

    try {
        // Buscar admin no Firestore
        const snapshot = await db.collection('admins')
            .where('login', '==', login)
            .get();

        if (snapshot.empty) {
            showLoginError('Login ou senha incorretos');
            return;
        }

        const admin = snapshot.docs[0];
        const data = admin.data();

        // Verificar senha
        if (data.senha !== hashSenha(senha)) {
            showLoginError('Login ou senha incorretos');
            return;
        }

        // Login bem-sucedido
        currentAdmin = {
            id: admin.id,
            nome: data.nome,
            login: data.login
        };

        localStorage.setItem(STORAGE_KEYS.ADMIN, JSON.stringify(currentAdmin));
        showMainScreen();

    } catch (error) {
        console.error('Erro no login:', error);
        showLoginError('Erro ao fazer login. Tente novamente.');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.ADMIN);
    currentAdmin = null;
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

        // Esconder todas as tabs
        tabFuncionarios.classList.add('hidden');
        tabRestaurantes.classList.add('hidden');
        tabRelatorios.classList.add('hidden');

        // Mostrar tab selecionada
        if (tabName === 'funcionarios') {
            tabFuncionarios.classList.remove('hidden');
            loadFuncionarios();
        } else if (tabName === 'restaurantes') {
            tabRestaurantes.classList.remove('hidden');
            loadRestaurantes();
        } else if (tabName === 'relatorios') {
            tabRelatorios.classList.remove('hidden');
            loadRelatorios();
        }
    });
});

// ============================================
// FUNCIONÁRIOS
// ============================================

formFuncionario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('func-nome').value.trim();
    const login = document.getElementById('func-login').value.trim();
    const senha = document.getElementById('func-senha').value;

    hideAlerts('funcionario');

    try {
        // Verificar se login já existe
        const existing = await db.collection('funcionarios')
            .where('login', '==', login)
            .get();

        if (!existing.empty) {
            showAlert('funcionario-error', 'Este login já está em uso');
            return;
        }

        // Cadastrar funcionário
        await db.collection('funcionarios').add({
            nome,
            login,
            senha: hashSenha(senha),
            tipo: 'funcionario',
            dataCriacao: new Date().toISOString()
        });

        showAlert('funcionario-success', 'Funcionário cadastrado com sucesso!');
        formFuncionario.reset();
        loadFuncionarios();

    } catch (error) {
        console.error('Erro ao cadastrar funcionário:', error);
        showAlert('funcionario-error', 'Erro ao cadastrar funcionário');
    }
});

async function loadFuncionarios() {
    listaFuncionarios.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const snapshot = await db.collection('funcionarios').get();

        if (snapshot.empty) {
            listaFuncionarios.innerHTML = `
                <div class="empty-state">
                    <p>Nenhum funcionário cadastrado</p>
                </div>
            `;
            return;
        }

        let html = '<ul class="list">';

        snapshot.forEach(doc => {
            const data = doc.data();
            html += `
                <li class="list-item">
                    <div class="list-item-info">
                        <div class="name">${data.nome}</div>
                        <div class="details">Login: ${data.login}</div>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="deleteFuncionario('${doc.id}')">
                        Excluir
                    </button>
                </li>
            `;
        });

        html += '</ul>';
        listaFuncionarios.innerHTML = html;

    } catch (error) {
        console.error('Erro ao carregar funcionários:', error);
        listaFuncionarios.innerHTML = '<div class="alert alert-danger">Erro ao carregar</div>';
    }
}

async function deleteFuncionario(id) {
    if (!confirm('Tem certeza que deseja excluir este funcionário?')) return;

    try {
        await db.collection('funcionarios').doc(id).delete();
        loadFuncionarios();
    } catch (error) {
        console.error('Erro ao excluir funcionário:', error);
        alert('Erro ao excluir funcionário');
    }
}

// ============================================
// RESTAURANTES
// ============================================

formRestaurante.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('rest-nome').value.trim();

    hideAlerts('restaurante');

    try {
        await db.collection('restaurantes').add({
            nome,
            dataCriacao: new Date().toISOString()
        });

        showAlert('restaurante-success', 'Restaurante cadastrado com sucesso!');
        formRestaurante.reset();
        loadRestaurantes();

    } catch (error) {
        console.error('Erro ao cadastrar restaurante:', error);
        showAlert('restaurante-error', 'Erro ao cadastrar restaurante');
    }
});

formUsuarioRestaurante.addEventListener('submit', async (e) => {
    e.preventDefault();

    const restauranteId = document.getElementById('user-rest-restaurante').value;
    const restauranteNome = document.getElementById('user-rest-restaurante').selectedOptions[0].text;
    const nome = document.getElementById('user-rest-nome').value.trim();
    const login = document.getElementById('user-rest-login').value.trim();
    const senha = document.getElementById('user-rest-senha').value;

    hideAlerts('usuario-rest');

    try {
        // Verificar se login já existe
        const existing = await db.collection('usuarios_restaurante')
            .where('login', '==', login)
            .get();

        if (!existing.empty) {
            showAlert('usuario-rest-error', 'Este login já está em uso');
            return;
        }

        await db.collection('usuarios_restaurante').add({
            nome,
            login,
            senha: hashSenha(senha),
            restauranteId,
            restauranteNome,
            tipo: 'restaurante',
            dataCriacao: new Date().toISOString()
        });

        showAlert('usuario-rest-success', 'Usuário cadastrado com sucesso!');
        formUsuarioRestaurante.reset();

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        showAlert('usuario-rest-error', 'Erro ao cadastrar usuário');
    }
});

async function loadRestaurantes() {
    listaRestaurantes.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const snapshot = await db.collection('restaurantes').get();
        const select = document.getElementById('user-rest-restaurante');

        // Limpar select
        select.innerHTML = '<option value="">Selecione um restaurante</option>';

        if (snapshot.empty) {
            listaRestaurantes.innerHTML = `
                <div class="empty-state">
                    <p>Nenhum restaurante cadastrado</p>
                </div>
            `;
            return;
        }

        let html = '<ul class="list">';

        snapshot.forEach(doc => {
            const data = doc.data();

            // Adicionar ao select
            select.innerHTML += `<option value="${doc.id}">${data.nome}</option>`;

            // Adicionar à lista
            html += `
                <li class="list-item">
                    <div class="list-item-info">
                        <div class="name">${data.nome}</div>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="deleteRestaurante('${doc.id}')">
                        Excluir
                    </button>
                </li>
            `;
        });

        html += '</ul>';
        listaRestaurantes.innerHTML = html;

    } catch (error) {
        console.error('Erro ao carregar restaurantes:', error);
        listaRestaurantes.innerHTML = '<div class="alert alert-danger">Erro ao carregar</div>';
    }
}

async function deleteRestaurante(id) {
    if (!confirm('Tem certeza que deseja excluir este restaurante?')) return;

    try {
        await db.collection('restaurantes').doc(id).delete();
        loadRestaurantes();
    } catch (error) {
        console.error('Erro ao excluir restaurante:', error);
        alert('Erro ao excluir restaurante');
    }
}

// ============================================
// RELATÓRIOS
// ============================================

async function loadRelatorios() {
    const data = relatorioData.value;

    try {
        // Carregar contagens
        const refeicoes = await db.collection('refeicoes')
            .where('data', '==', data)
            .get();

        let total = 0, cafe = 0, almoco = 0, janta = 0;
        const porRestaurante = {};

        refeicoes.forEach(doc => {
            const d = doc.data();
            total++;
            if (d.tipo === 'cafe') cafe++;
            else if (d.tipo === 'almoco') almoco++;
            else if (d.tipo === 'janta') janta++;

            // Por restaurante
            if (!porRestaurante[d.restauranteNome]) {
                porRestaurante[d.restauranteNome] = { cafe: 0, almoco: 0, janta: 0, total: 0 };
            }
            porRestaurante[d.restauranteNome][d.tipo]++;
            porRestaurante[d.restauranteNome].total++;
        });

        // Atualizar estatísticas gerais
        document.getElementById('rel-total').textContent = total;
        document.getElementById('rel-cafe').textContent = cafe;
        document.getElementById('rel-almoco').textContent = almoco;
        document.getElementById('rel-janta').textContent = janta;

        // Carregar totais de funcionários e restaurantes
        const funcionarios = await db.collection('funcionarios').get();
        const restaurantes = await db.collection('restaurantes').get();

        document.getElementById('rel-funcionarios').textContent = funcionarios.docs.length;
        document.getElementById('rel-restaurantes').textContent = restaurantes.docs.length;

        // Relatório por restaurante
        const relPorRest = document.getElementById('relatorio-por-restaurante');

        if (Object.keys(porRestaurante).length === 0) {
            relPorRest.innerHTML = `
                <div class="empty-state">
                    <p>Nenhuma refeição registrada nesta data</p>
                </div>
            `;
        } else {
            let html = '<ul class="list">';

            for (const [nome, stats] of Object.entries(porRestaurante)) {
                html += `
                    <li class="list-item">
                        <div class="list-item-info">
                            <div class="name">${nome}</div>
                            <div class="details">
                                Café: ${stats.cafe} | Almoço: ${stats.almoco} | Janta: ${stats.janta}
                            </div>
                        </div>
                        <span class="list-item-badge badge-almoco">
                            ${stats.total} total
                        </span>
                    </li>
                `;
            }

            html += '</ul>';
            relPorRest.innerHTML = html;
        }

    } catch (error) {
        console.error('Erro ao carregar relatórios:', error);
    }
}

// ============================================
// HELPERS
// ============================================

function showAlert(id, message) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = message;
        el.classList.remove('hidden');

        // Auto-esconder após 5 segundos
        setTimeout(() => {
            el.classList.add('hidden');
        }, 5000);
    }
}

function hideAlerts(prefix) {
    const success = document.getElementById(`${prefix}-success`);
    const error = document.getElementById(`${prefix}-error`);
    if (success) success.classList.add('hidden');
    if (error) error.classList.add('hidden');
}
