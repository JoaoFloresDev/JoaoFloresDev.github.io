/**
 * Configuração do Firebase
 * ========================
 *
 * MODO DE DESENVOLVIMENTO:
 * - USE_MOCK = true  -> Usa dados mockados (sem Firebase)
 * - USE_MOCK = false -> Usa Firebase real
 *
 * Mude para false quando for conectar ao Firebase de verdade.
 */

// ============================================
// FLAG PARA MODO MOCK (ALTERE AQUI)
// ============================================
const USE_MOCK = true;
// ============================================

// ============================================
// FUNÇÕES UTILITÁRIAS (devem vir primeiro!)
// ============================================

// Função auxiliar para hash simples de senha (para demo)
// Em produção, use Firebase Auth ou hash mais seguro no backend
function hashSenha(senha) {
    let hash = 0;
    for (let i = 0; i < senha.length; i++) {
        const char = senha.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString();
}

// Função para formatar data
function formatarData(data) {
    const d = data instanceof Date ? data : new Date(data);
    return d.toLocaleDateString('pt-BR');
}

// Função para formatar hora
function formatarHora(data) {
    const d = data instanceof Date ? data : new Date(data);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Função para obter data de hoje no formato YYYY-MM-DD
function getDataHoje() {
    const hoje = new Date();
    return hoje.toISOString().split('T')[0];
}

// Função para determinar o tipo de refeição baseado no horário
function getTipoRefeicao() {
    const hora = new Date().getHours();

    // Café da manhã: 6h às 9h
    if (hora >= 6 && hora < 9) {
        return { tipo: 'cafe', nome: 'Café da manhã', saudacao: 'Bom dia!' };
    }
    // Almoço: 11h às 14h
    else if (hora >= 11 && hora < 14) {
        return { tipo: 'almoco', nome: 'Almoço', saudacao: 'Bom dia!' };
    }
    // Janta: 18h às 20h
    else if (hora >= 18 && hora < 20) {
        return { tipo: 'janta', nome: 'Janta', saudacao: 'Boa noite!' };
    }
    // Fora do horário - mostra próxima refeição
    else if (hora < 6) {
        return { tipo: 'cafe', nome: 'Café da manhã', saudacao: 'Bom dia!', proximo: true };
    }
    else if (hora >= 9 && hora < 11) {
        return { tipo: 'almoco', nome: 'Almoço', saudacao: 'Bom dia!', proximo: true };
    }
    else if (hora >= 14 && hora < 18) {
        return { tipo: 'janta', nome: 'Janta', saudacao: 'Boa tarde!', proximo: true };
    }
    else {
        return { tipo: 'cafe', nome: 'Café da manhã (amanhã)', saudacao: 'Boa noite!', proximo: true };
    }
}

// Constantes para localStorage
const STORAGE_KEYS = {
    FUNCIONARIO: 'refeicoes_funcionario',
    RESTAURANTE: 'refeicoes_restaurante',
    ADMIN: 'refeicoes_admin'
};

// ============================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================

/**
 * IMPORTANTE: Substitua os valores abaixo pelas suas credenciais do Firebase.
 *
 * Para obter essas credenciais:
 * 1. Acesse https://console.firebase.google.com/
 * 2. Crie um novo projeto ou selecione um existente
 * 3. Vá em "Configurações do projeto" > "Seus apps"
 * 4. Clique em "Web" para adicionar um app web
 * 5. Copie as credenciais e cole abaixo
 */

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializa o Firebase (apenas se não estiver em modo mock)
let db = null;

if (!USE_MOCK && typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
}

// ============================================
// DADOS MOCKADOS PARA DESENVOLVIMENTO
// ============================================

const MOCK_DATA = {
    // Funcionários mockados
    funcionarios: [
        { id: 'func1', nome: 'João Silva', login: 'joao', senha: hashSenha('123') },
        { id: 'func2', nome: 'Maria Santos', login: 'maria', senha: hashSenha('123') },
        { id: 'func3', nome: 'Pedro Oliveira', login: 'pedro', senha: hashSenha('123') },
        { id: 'func4', nome: 'Ana Costa', login: 'ana', senha: hashSenha('123') },
        { id: 'func5', nome: 'Carlos Ferreira', login: 'carlos', senha: hashSenha('123') }
    ],

    // Restaurantes mockados
    restaurantes: [
        { id: 'rest1', nome: 'Restaurante Central' },
        { id: 'rest2', nome: 'Restaurante Norte' }
    ],

    // Usuários do restaurante mockados
    usuarios_restaurante: [
        { id: 'user1', nome: 'Operador 1', login: 'op1', senha: hashSenha('123'), restauranteId: 'rest1', restauranteNome: 'Restaurante Central' },
        { id: 'user2', nome: 'Operador 2', login: 'op2', senha: hashSenha('123'), restauranteId: 'rest2', restauranteNome: 'Restaurante Norte' }
    ],

    // Admins mockados
    admins: [
        { id: 'admin1', nome: 'Administrador', login: 'admin', senha: hashSenha('admin') }
    ],

    // Refeições mockadas (serão preenchidas dinamicamente)
    refeicoes: []
};

// Gerar algumas refeições mockadas para hoje
function generateMockRefeicoes() {
    const hoje = getDataHoje();
    const refeicoes = [];

    const funcionarios = MOCK_DATA.funcionarios;
    const restaurantes = MOCK_DATA.restaurantes;

    // Café da manhã - 5 refeições
    for (let i = 0; i < 5; i++) {
        const func = funcionarios[i % funcionarios.length];
        const rest = restaurantes[i % restaurantes.length];
        refeicoes.push({
            id: `ref${i}`,
            funcionarioId: func.id,
            funcionarioNome: func.nome,
            funcionarioLogin: func.login,
            tipo: 'cafe',
            data: hoje,
            horaEscaneamento: new Date(new Date().setHours(7, 30 + i * 5, 0)).toISOString(),
            restauranteId: rest.id,
            restauranteNome: rest.nome,
            escaneadoPor: 'Operador 1'
        });
    }

    // Almoço - 8 refeições
    for (let i = 0; i < 8; i++) {
        const func = funcionarios[i % funcionarios.length];
        const rest = restaurantes[i % restaurantes.length];
        refeicoes.push({
            id: `ref${10 + i}`,
            funcionarioId: func.id,
            funcionarioNome: func.nome,
            funcionarioLogin: func.login,
            tipo: 'almoco',
            data: hoje,
            horaEscaneamento: new Date(new Date().setHours(12, i * 5, 0)).toISOString(),
            restauranteId: rest.id,
            restauranteNome: rest.nome,
            escaneadoPor: 'Operador 1'
        });
    }

    // Janta - 3 refeições
    for (let i = 0; i < 3; i++) {
        const func = funcionarios[i % funcionarios.length];
        const rest = restaurantes[i % restaurantes.length];
        refeicoes.push({
            id: `ref${20 + i}`,
            funcionarioId: func.id,
            funcionarioNome: func.nome,
            funcionarioLogin: func.login,
            tipo: 'janta',
            data: hoje,
            horaEscaneamento: new Date(new Date().setHours(18, 30 + i * 10, 0)).toISOString(),
            restauranteId: rest.id,
            restauranteNome: rest.nome,
            escaneadoPor: 'Operador 2'
        });
    }

    MOCK_DATA.refeicoes = refeicoes;
}

// Gerar refeições ao carregar
generateMockRefeicoes();

// ============================================
// MOCK DATABASE - Simula o Firestore
// ============================================

const mockDb = {
    collection: function(collectionName) {
        return new MockCollection(collectionName);
    }
};

class MockCollection {
    constructor(name) {
        this.name = name;
        this.filters = [];
        this.orderByField = null;
        this.orderByDirection = 'asc';
        this.limitCount = null;
    }

    where(field, operator, value) {
        this.filters.push({ field, operator, value });
        return this;
    }

    orderBy(field, direction = 'asc') {
        this.orderByField = field;
        this.orderByDirection = direction;
        return this;
    }

    limit(count) {
        this.limitCount = count;
        return this;
    }

    async get() {
        // Criar cópia dos dados para não afetar filtros anteriores
        let data = [...(MOCK_DATA[this.name] || [])];

        // Aplicar filtros
        this.filters.forEach(filter => {
            data = data.filter(item => {
                if (filter.operator === '==') {
                    return item[filter.field] === filter.value;
                }
                return true;
            });
        });

        // Ordenar
        if (this.orderByField) {
            data.sort((a, b) => {
                const aVal = a[this.orderByField];
                const bVal = b[this.orderByField];
                if (this.orderByDirection === 'desc') {
                    return bVal > aVal ? 1 : -1;
                }
                return aVal > bVal ? 1 : -1;
            });
        }

        // Limitar
        if (this.limitCount) {
            data = data.slice(0, this.limitCount);
        }

        return {
            empty: data.length === 0,
            docs: data.map(item => ({
                id: item.id,
                data: () => item
            })),
            forEach: function(callback) {
                this.docs.forEach(doc => callback(doc));
            }
        };
    }

    async add(data) {
        const newId = `new_${Date.now()}`;
        const newItem = { id: newId, ...data };
        MOCK_DATA[this.name].push(newItem);
        return { id: newId };
    }

    doc(id) {
        const collectionName = this.name;
        return {
            get: async () => {
                const data = MOCK_DATA[collectionName] || [];
                const item = data.find(d => d.id === id);
                return {
                    exists: !!item,
                    id: id,
                    data: () => item
                };
            },
            delete: async () => {
                const index = MOCK_DATA[collectionName].findIndex(d => d.id === id);
                if (index > -1) {
                    MOCK_DATA[collectionName].splice(index, 1);
                }
            }
        };
    }
}

// Usar mock ou Firebase real
if (USE_MOCK) {
    db = mockDb;
    console.log('🔧 MODO MOCK ATIVADO - Usando dados de teste');
    console.log('📋 Logins disponíveis:');
    console.log('   Funcionário: joao / 123 (ou maria, pedro, ana, carlos)');
    console.log('   Restaurante: op1 / 123 (ou op2)');
    console.log('   Admin: admin / admin');
}
