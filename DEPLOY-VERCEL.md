# 🚀 Guia de Deploy na Vercel - AudioSpulse

## Configuração do Deploy

### 1. Conectar Repositório GitHub

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório: `Leonardotrentini/audiospulse`
5. Selecione a branch: `main`

### 2. Configurações do Projeto

#### Framework Preset
- **Framework Preset:** `Vite` (deve ser detectado automaticamente)

#### Root Directory
- **Root Directory:** `./` (raiz do projeto)

#### Build Settings
- **Build Command:** `npm run build` (padrão do Vite)
- **Output Directory:** `dist` (padrão do Vite)
- **Install Command:** `npm install` (padrão)

### 3. Environment Variables (Variáveis de Ambiente)

**IMPORTANTE:** Como a aplicação funciona sem a chave API do Gemini, você pode:

**Opção 1 - Sem variáveis (Recomendado):**
- Deixe as variáveis de ambiente vazias
- A aplicação funcionará normalmente

**Opção 2 - Com variável vazia:**
Se quiser configurar mesmo assim:
- **Key:** `GEMINI_API_KEY`
- **Value:** (deixe vazio)
- **Environment:** Production, Preview, Development

### 4. Deploy

1. Clique em **"Deploy"**
2. Aguarde o build completar (1-2 minutos)
3. A Vercel fornecerá uma URL: `https://audiospulse-[hash].vercel.app`

### 5. Configurações Adicionais (Opcional)

#### Domínio Personalizado
- Vá em **Settings > Domains**
- Adicione seu domínio personalizado se desejar

#### Configurações de Build
O arquivo `vercel.json` já está configurado com:
- Redirects para SPA (Single Page Application)
- Configurações de build do Vite
- Output directory correto

## ✅ Checklist de Deploy

- [x] Repositório conectado ao GitHub
- [x] Branch `main` selecionada
- [x] Framework Vite detectado
- [x] Root Directory: `./`
- [x] Build Command: `npm run build`
- [x] Output Directory: `dist`
- [ ] Variáveis de ambiente configuradas (opcional)
- [ ] Deploy executado

## 📝 Notas Importantes

1. **Não precisa de API Key:** A aplicação funciona perfeitamente sem `GEMINI_API_KEY`
2. **Arquivos estáticos:** Os áudios estão no GitHub, então funcionarão via URLs do GitHub Raw
3. **Hash Router:** A aplicação usa HashRouter, então as rotas funcionam corretamente com os rewrites configurados

## 🔍 Verificação Pós-Deploy

Após o deploy, verifique:
1. ✅ Aplicação carrega na URL fornecida
2. ✅ Interface aparece corretamente
3. ✅ Áudios carregam (usando URLs do GitHub)
4. ✅ Navegação entre páginas funciona

## 🐛 Troubleshooting

**Se o build falhar:**
- Verifique os logs na Vercel
- Certifique-se que `package.json` tem todos os scripts necessários
- Verifique se todas as dependências estão no `package.json`

**Se a aplicação não carregar:**
- Verifique se o `index.html` está na raiz
- Confirme que o output directory está como `dist`
- Verifique os rewrites no `vercel.json`

