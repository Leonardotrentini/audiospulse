# Script para rodar a aplicação AudioSpulse
# Execute: .\RODAR-APLICACAO.ps1

Write-Host "=== AudioSpulse - Iniciando Aplicação ===" -ForegroundColor Green

# Navegar para o diretório
Set-Location "C:\Users\Leonardo trentini\Desktop\audiospulse"

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependências..." -ForegroundColor Yellow
    npm install
}

# Verificar se .env.local existe
if (-not (Test-Path ".env.local")) {
    Write-Host "ATENÇÃO: Arquivo .env.local não encontrado!" -ForegroundColor Red
    Write-Host "Crie o arquivo .env.local e adicione: GEMINI_API_KEY=sua-chave-aqui" -ForegroundColor Yellow
    Write-Host ""
    $apiKey = Read-Host "Digite sua GEMINI_API_KEY (ou pressione Enter para pular)"
    if ($apiKey) {
        "GEMINI_API_KEY=$apiKey" | Out-File -FilePath .env.local -Encoding utf8
        Write-Host ".env.local criado com sucesso!" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Iniciando servidor na porta 3000..." -ForegroundColor Green
Write-Host "Acesse: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""

# Iniciar o servidor
npm run dev

