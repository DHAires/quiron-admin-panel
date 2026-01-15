# 🏛️ Quiron Admin Panel

Painel de administração web para gerenciar o banco de questões do Quiron Concursos.

## 📋 O Que É

Um dashboard completo hospedado no Vercel que permite gerenciar as questões do jogo através de uma interface web intuitiva, sem precisar mexer em código.

## 🚀 Funcionalidades

### ✅ Já Implementado:

- **🔐 Login com Código Admin** - Acesso seguro com código `QUIRON_DEV_2024`
- **📊 Dashboard com Estatísticas** - Visualiza quantas questões existem em cada área
- **📚 Lista de Questões** - Mostra todas as questões do banco
- **🔍 Filtros e Busca** - Filtra por área, dificuldade e busca por texto
- **➕ Adicionar Nova Questão** - Formulário completo para criar questão manualmente
- **📤 Importar em Massa** - Ferramenta para importar as 1.370 questões da pasta /data/

### 🚧 Para Implementar:

- **✏️ Editar Questão** - Criar rota no backend para atualizar questão
- **🗑️ Deletar Questão** - Criar rota no backend para remover questão

## 📂 Estrutura de Arquivos

```
/admin-panel/
├── index.html           # Login com código admin
├── dashboard.html       # Painel principal
├── nova-questao.html    # Adicionar questão
├── importar.html        # Importação em massa
└── README.md            # Este arquivo
```

## 🔧 Como Usar

### 1️⃣ Fazer Deploy no Vercel

**Opção A: Via GitHub (Recomendado)**

1. Copie a pasta `/admin-panel/` para um repositório GitHub
2. Acesse https://vercel.com
3. Clique em "Import Project"
4. Selecione seu repositório
5. Configure:
   - **Framework:** Other (HTML estático)
   - **Root Directory:** `/`
6. Clique em "Deploy"

**Opção B: Upload Direto**

1. Baixe todos os arquivos da pasta `/admin-panel/`
2. Acesse https://vercel.com/new
3. Arraste a pasta para o site
4. Aguarde o deploy

### 2️⃣ Acessar o Painel

1. Acesse a URL gerada pelo Vercel (ex: `https://quiron-admin.vercel.app`)
2. Digite o código admin: `QUIRON_DEV_2024`
3. Clique em "Acessar Painel"

### 3️⃣ Importar as 1.370 Questões

1. No dashboard, clique em **"Importar em Massa"**
2. Selecione **"Importar Todas as Questões"**
3. Clique em **"Iniciar Importação"**
4. Aguarde o processo (pode levar 5-10 minutos)

**⚠️ IMPORTANTE:** 
A importação atual é uma SIMULAÇÃO. Para importar as questões reais da pasta `/data/`, você precisa:

1. Criar um script Node.js que:
   - Lê todos os arquivos `.ts` da pasta `/data/`
   - Extrai as questões de cada arquivo
   - Converte para o formato `GameQuestion`
   - Chama a rota `/game/seed` em batches

2. **OU** exportar manualmente as questões para JSON e fazer upload pelo painel.

## 🔑 Código Admin

```
QUIRON_DEV_2024
```

**⚠️ SEGURANÇA:**
- Este código está hardcoded tanto no frontend quanto no backend
- Para produção, considere:
  - Autenticação real com Supabase Auth
  - Role-based access control (RBAC)
  - Rate limiting

## 🌐 Rotas do Backend Utilizadas

O painel se conecta com estas rotas do Supabase Edge Function:

```
GET  /make-server-50734795/game/stats           # Estatísticas
GET  /make-server-50734795/game/questions       # Listar questões
POST /make-server-50734795/game/seed            # Adicionar questões
```

**Rotas que precisam ser implementadas:**

```
PUT    /make-server-50734795/game/questions/:id  # Editar questão
DELETE /make-server-50734795/game/questions/:id  # Deletar questão
```

## 📱 URLs do Painel

Depois do deploy no Vercel, suas URLs serão:

```
https://SEU-PROJETO.vercel.app/                    # Login
https://SEU-PROJETO.vercel.app/dashboard.html      # Dashboard
https://SEU-PROJETO.vercel.app/nova-questao.html   # Nova questão
https://SEU-PROJETO.vercel.app/importar.html       # Importação
```

## 🎨 Design

- **Tema:** Cores do Quiron (azul, vermelho, roxo, amarelo)
- **Responsivo:** Funciona em desktop e mobile
- **Moderno:** Interface limpa e profissional
- **UX:** Intuitivo e fácil de usar

## 🔄 Fluxo de Trabalho

### Adicionar Questão Manualmente:

1. Dashboard → "Nova Questão"
2. Preencher formulário
3. Salvar
4. Questão aparece imediatamente no banco

### Importar em Massa:

1. Dashboard → "Importar em Massa"
2. Escolher método (todas ou arquivo JSON)
3. Iniciar importação
4. Acompanhar progresso em tempo real
5. Ver estatísticas finais

## 🐛 Troubleshooting

### Erro ao fazer login:
- Verifique se o código está correto: `QUIRON_DEV_2024`
- Verifique se o backend está rodando
- Abra o console do navegador (F12) para ver erros

### Questões não aparecem:
- Verifique se há questões no banco (olhe as estatísticas)
- Tente fazer uma importação de teste
- Verifique a conexão com o Supabase

### Importação muito lenta:
- Normal! São muitas questões
- O sistema processa em batches de 20 para não sobrecarregar
- Não feche a página durante a importação

## 📞 Suporte

Se tiver problemas:

1. Verifique o console do navegador (F12)
2. Verifique os logs do Supabase Edge Function
3. Teste as rotas manualmente com Postman/Insomnia

## 🚀 Próximos Passos

1. ✅ Deploy no Vercel
2. ✅ Importar questões existentes
3. 🚧 Implementar edição de questões
4. 🚧 Implementar deleção de questões
5. 🚧 Adicionar filtros avançados
6. 🚧 Exportar questões para backup
7. 🚧 Estatísticas detalhadas por matéria

## 📝 Licença

Parte do projeto Quiron Concursos - Uso interno apenas.

---

**Desenvolvido com ❤️ para facilitar o gerenciamento de questões!**
