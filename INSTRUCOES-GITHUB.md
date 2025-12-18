# Instruções para Publicar no GitHub

## Passo a Passo

### 1. Criar o Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique no botão "+" no canto superior direito
3. Selecione "New repository"
4. Nome do repositório: `audiospulse`
5. Descrição: "Repositório de áudios para Google Studio - Memory Pulse"
6. Deixe como **Público** (para que as URLs funcionem)
7. **NÃO** marque "Initialize with README" (já temos um)
8. Clique em "Create repository"

### 2. Inicializar Git e Fazer Push

Abra o terminal na pasta do projeto e execute os comandos:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Adicionar arquivos de áudio para Google Studio"

# Adicionar o remote do GitHub (substitua SEU-USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU-USUARIO/audiospulse.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

### 3. Obter as URLs

Após o push, as URLs estarão disponíveis em:
- **Formato:** `https://raw.githubusercontent.com/SEU-USUARIO/audiospulse/main/audios/NOME-DO-ARQUIVO`
- **Arquivo com todas as URLs:** Consulte `urls-audios.md` e substitua `[SEU-USUARIO-GITHUB]` pelo seu nome de usuário

### 4. Usar no Google Studio

Copie a URL do arquivo desejado e use no Google Studio para vincular o áudio ao módulo correspondente.

## Importante

- Os arquivos devem estar em um repositório **público** para que as URLs funcionem
- As URLs são case-sensitive (maiúsculas/minúsculas importam)
- Espaços e caracteres especiais serão codificados na URL automaticamente

