# vibe-git 🚀

> **Sua CLI inteligente para gerar commits e Pull Requests profissionais.**  
> Transforme alterações caóticas em um histórico Git limpo, atômico e revisável.

[![npm version](https://img.shields.io/npm/v/%40igoralbuquerque%2Fvibe-git.svg?style=flat-square)](https://www.npmjs.com/package/@igoralbuquerque/vibe-git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-blue?style=flat-square)](https://aistudio.google.com/)
[![Powered by OpenAI](https://img.shields.io/badge/Powered%20by-OpenAI-green?style=flat-square)](https://platform.openai.com/)

---

## 🎯 O que é o vibe-git?

O **vibe-git** é uma **CLI (Command Line Interface)** que atua como um **Arquiteto de Software** diretamente no seu terminal.

Após um dia inteiro codando — com mudanças espalhadas entre backend, frontend, banco de dados, migrations e configurações — o `vibe-git`:

1. Analisa todas as alterações do repositório.
2. Identifica **dependências técnicas reais**  
   (ex.: banco → API → frontend).
3. Gera um **plano de commits atômicos e semânticos**.
4. Opcionalmente separa mudanças em **múltiplas branches**.
5. Produz **descrições de Pull Requests** alinhadas ao padrão da sua equipe.

**Resultado:**  
Um histórico Git legível, code reviews objetivos e **reverts seguros**.

### Por que usar o vibe-git em vez de agentes de IDE?

- Mais estruturado que sugestões isoladas (ex.: Copilot).
- Consome **menos tokens** do que IDEs com agentes persistentes.
- Zero alucinação: contexto padronizado e controlado.
- Fluxo explícito, previsível e auditável.
- Gratuito e simples de testar.

---

## 🆚 Antes vs. Depois

| Abordagem comum                                 | Com vibe-git                                         |
| ----------------------------------------------- | ---------------------------------------------------- |
| `git commit -m "fiz o cadastro e arrumei bugs"` | **Commit 1:** `chore(deps): install prisma`          |
|                                                 | **Commit 2:** `feat(db): add user schema`            |
|                                                 | **Commit 3:** `feat(api): implement auth controller` |
|                                                 | **Commit 4:** `feat(ui): create login form`          |
| ❌ Reverter uma parte quebra o resto            | ✅ Commits **atômicos e reversíveis**                |
| ❌ Code review confuso                          | ✅ Review **passo a passo**                          |

---

## 🛠️ Instalação e Configuração

### 1. Instalação

Via `npx` ou instalação global:

```bash
npm install -g @igoralbuquerque/vibe-git
```

### 2. Inicialização

Na raiz do projeto:

```bash
vibe-git init
```

Arquivos gerados:

- `vibe-git.config.json` → Preferências e templates
- `.env` → Chave da IA
- `vibe-git/entry` → Descrição do trabalho realizado

### 3. Configuração da IA

1. Abra o `.env`:

```env
VIBE_GIT_AI_API_KEY=sk-sua-chave-aqui
```

2. Defina o provedor em `vibe-git.config.json`:

```json
{
  "aiProvider": "gemini | openai"
}
```

**Onde pegar sua chave?**

- **Google Gemini (Grátis/Recomendado):** [Google AI Studio](https://aistudio.google.com/app/apikey)
- **OpenAI (ChatGPT):** [OpenAI Platform](https://platform.openai.com/api-keys)

---

## 🚀 Como Usar

Fluxo padrão: **Descreva → Planeje → Execute**

### Passo 1: Descreva o Trabalho

Edite `vibe-git/entry/example.json` e descreva:

- O que foi feito
- Como separar por branches

Exemplo:

```json
{
  "exitName": "plan-NOS-120",
  "userSummary": [
    "Implementei autenticação com JWT",
    "Criei telas de login e cadastro"
  ],
  "branches": [
    {
      "branchName": "feat/auth-core",
      "description": "Infraestrutura, banco e API"
    },
    {
      "branchName": "feat/auth-ui",
      "description": "Componentes React e estilos"
    }
  ]
}
```

### Passo 2: Gerar o Plano

```bash
vibe-git run example.json
```

### Passo 3: Executar

O plano será gerado em:

```
vibe-git/exit/plan-NOS-120.md
```

1. Revise o plano
2. Copie o script Bash
3. Execute no terminal

Seu trabalho vira commits profissionais em segundos.

---

## 💻 Área do Desenvolvedor

Projeto ideal para estudar:

- Arquitetura de CLIs
- Engenharia de prompt
- Manipulação de Git
- Organização de commits

### Rodando Localmente

```bash
git clone https://github.com/seu-usuario/vibe-git.git
cd vibe-git
npm install
npm link
```

### Estrutura

```
src/commands   → comandos CLI
src/services   → Git, Gemini, OpenAI
src/constants  → prompts
src/utils      → utilitários e logs
```

---

## 📄 Licença

Licença **MIT** — use, modifique e distribua livremente.
