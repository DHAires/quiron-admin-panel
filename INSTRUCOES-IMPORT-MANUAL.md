# 📋 INSTRUÇÕES PARA IMPORTAÇÃO MANUAL DE QUESTÕES

## 🎯 **O QUE FAZER AGORA**

O backend está pronto! Agora você tem 2 opções para importar as questões reais:

---

## **OPÇÃO A: USO DO PAINEL ADMIN (Interface visual)** ✅ **RECOMENDADO**

### **Passo 1: Fazer Deploy do Backend**
```bash
# No terminal do Supabase CLI:
supabase functions deploy make-server-50734795
```

### **Passo 2: Abrir o Painel Admin**
Acesse: `https://questions-beryl-rho.vercel.app/admin-panel/questoes-react.html`

### **Passo 3: Usar o Botão de Importação**
1. Clique em "🔄 Importar Questões Reais"
2. Selecione o arquivo da pasta `/data/`
3. O sistema vai:
   - Fazer fetch do arquivo TypeScript
   - Fazer parse das questões
   - Enviar para o backend
   - Salvar no Supabase

---

## **OPÇÃO B: IMPORTAÇÃO VIA SCRIPT/CURL** 🔧 **MANUAL**

### **Passo 1: Ler o Arquivo TypeScript**

Exemplo com `questions-constitucional.ts`:

```javascript
// Conteúdo do arquivo (simplificado):
export const questionsConstitucional = {
  "direitos-garantias": [
    {
      id: "const-dg-01",
      enunciado: "Segundo a Constituição Federal de 1988...",
      alternativas: {
        A: "Os direitos e garantias expressos...",
        B: "As normas definidoras dos direitos...",
        C: "Os tratados e convenções internacionais...",
        D: "Os direitos e deveres individuais...",
        E: "A casa é asilo inviolável..."
      },
      gabarito: "B",
      explicacao: "O artigo 5º, §1º da CF/88 estabelece...",
      banca: "CESPE",
      ano: 2023,
      cargo: "Analista Judiciário - TRF"
    },
    // ... mais 89 questões
  ],
  // ... mais temas
}
```

### **Passo 2: Preparar o JSON**

```json
{
  "fileName": "questions-constitucional.ts",
  "area": "juridica",
  "materia": "Direito Constitucional",
  "tema": "direitos-garantias",
  "questions": [
    {
      "id": "const-dg-01",
      "enunciado": "Segundo a Constituição Federal de 1988...",
      "alternativas": {
        "A": "Os direitos e garantias expressos...",
        "B": "As normas definidoras dos direitos...",
        "C": "Os tratados e convenções internacionais...",
        "D": "Os direitos e deveres individuais...",
        "E": "A casa é asilo inviolável..."
      },
      "gabarito": "B",
      "explicacao": "O artigo 5º, §1º da CF/88 estabelece...",
      "banca": "CESPE",
      "ano": 2023,
      "cargo": "Analista Judiciário - TRF"
    }
  ]
}
```

### **Passo 3: Fazer POST com CURL**

```bash
curl -X POST \
  'https://{SEU_PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/react-questions/import-from-file' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {SEU_ANON_KEY}' \
  -H 'X-Admin-Code: QUIRON_DEV_2024' \
  -d @questoes.json
```

### **Passo 4: Verificar Response**

```json
{
  "success": true,
  "fileName": "questions-constitucional.ts",
  "area": "juridica",
  "materia": "Direito Constitucional",
  "tema": "direitos-garantias",
  "saved": 10,
  "updated": 0,
  "skipped": 0,
  "total": 10
}
```

---

## **OPÇÃO C: SCRIPT NODE.JS** 📦 **AUTOMÁTICO**

### **Criar script de importação:**

```javascript
// import-all-questions.js

import fs from 'fs';
import path from 'path';

const SUPABASE_URL = 'https://{SEU_PROJECT_ID}.supabase.co';
const ANON_KEY = '{SEU_ANON_KEY}';
const ADMIN_CODE = 'QUIRON_DEV_2024';

const ARQUIVOS = [
  {
    path: './data/questions-constitucional.ts',
    area: 'juridica',
    materia: 'Direito Constitucional'
  },
  {
    path: './data/questions-administrativo.ts',
    area: 'juridica',
    materia: 'Direito Administrativo'
  },
  // ... adicionar todos os arquivos
];

async function importarArquivo(arquivo) {
  // 1. Ler arquivo
  const conteudo = fs.readFileSync(arquivo.path, 'utf-8');
  
  // 2. Parse do TypeScript (extrair questões)
  // (implementar parser aqui)
  const questoes = parseQuestoes(conteudo);
  
  // 3. Fazer POST para cada tema
  for (const [tema, questions] of Object.entries(questoes)) {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/make-server-50734795/react-questions/import-from-file`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ANON_KEY}`,
          'X-Admin-Code': ADMIN_CODE
        },
        body: JSON.stringify({
          fileName: path.basename(arquivo.path),
          area: arquivo.area,
          materia: arquivo.materia,
          tema,
          questions
        })
      }
    );
    
    const result = await response.json();
    console.log(`✅ ${arquivo.materia} - ${tema}: ${result.saved} questões`);
  }
}

// Executar para todos os arquivos
for (const arquivo of ARQUIVOS) {
  await importarArquivo(arquivo);
}
```

### **Executar:**
```bash
node import-all-questions.js
```

---

## 🔍 **VERIFICAR IMPORTAÇÃO**

### **1. Ver Estatísticas:**
```bash
curl 'https://{SEU_PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/react-questions/stats' \
  -H 'Authorization: Bearer {SEU_ANON_KEY}'
```

### **2. Listar Questões de uma Área:**
```bash
curl 'https://{SEU_PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/react-questions?area=juridica' \
  -H 'Authorization: Bearer {SEU_ANON_KEY}'
```

### **3. Buscar Questão Específica:**
```bash
curl 'https://{SEU_PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/react-questions/const-dg-01' \
  -H 'Authorization: Bearer {SEU_ANON_KEY}'
```

---

## 📊 **PROGRESSO ESPERADO**

### **Área Jurídica (840 questões):**
- [ ] Direito Constitucional (90)
- [ ] Direito Administrativo (90)
- [ ] Direito Civil (90)
- [ ] Direito Penal (90)
- [ ] Direito Processual Civil (90)
- [ ] Direito do Trabalho (90)
- [ ] Direito Tributário (90)
- [ ] Direito Eleitoral (90)
- [ ] Direitos Humanos (90)

### **Área Policial (1.850 questões):**
- [ ] Processo Penal (90)
- [ ] Legislação Penal (90)
- [ ] Legislação Penal Especial (90)
- [ ] Criminalística (90)
- [ ] Criminologia (90)
- [ ] Procedimentos Policiais (90)
- [ ] ... (+1.310 questões de outros arquivos)

### **Área Fiscal-Bancária (2.733 questões):**
- [ ] Economia (273)
- [ ] Contabilidade Geral (320)
- [ ] AFO (290)
- [ ] Conhecimentos Bancários (280)
- [ ] ... (+1.570 questões de outros arquivos)

### **Área Conhecimentos Gerais (2.520 questões):**
- [ ] Português (300)
- [ ] Informática (280)
- [ ] Atualidades (270)
- [ ] História do Brasil (250)
- [ ] Raciocínio Lógico (260)
- [ ] ... (+1.160 questões de outros arquivos)

---

## ⚠️ **IMPORTANTE**

### **Antes de Importar:**
1. ✅ Fazer backup do banco (se já tiver dados)
2. ✅ Fazer deploy do backend atualizado
3. ✅ Testar com 1 arquivo pequeno primeiro
4. ✅ Verificar se as questões estão aparecendo corretamente
5. ✅ Depois importar todos os arquivos

### **Durante a Importação:**
- ⏱️ Cada arquivo pode levar alguns segundos
- 📊 Acompanhe os logs no Supabase Dashboard
- ✅ Verifique erros no response
- 🔄 Pode reimportar (sistema detecta duplicatas)

### **Após Importação:**
- ✅ Verificar estatísticas
- ✅ Testar busca de questões
- ✅ Atualizar painel admin para carregar questões reais
- ✅ Remover questões demo (se necessário)

---

## 🚀 **QUAL OPÇÃO VOCÊ PREFERE?**

**A)** Interface visual no painel admin (precisa implementar frontend)  
**B)** Script manual com CURL (mais trabalhoso)  
**C)** Script Node.js automático (precisa criar parser)

**Recomendo: Opção A + implementar frontend de importação agora!** ✨

---

**Próximo passo: Implementar o botão de importação no painel admin!** 🎯
