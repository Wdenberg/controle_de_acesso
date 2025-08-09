

const dataAtual = new Date();
const dataFormatada = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()} ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;

console.log(dataFormatada);
const idUrl = 'AKfycbxLR-yHB5HNxcsUOTwD474UdL2Os_93bHCfA9w0-IhNFGIQXDfwYZNxVrBGofTAqBCJ';
const WEB_APP_URL = `https://script.google.com/macros/s/${idUrl}/exec`;

/**
 * Registra o acesso à página na planilha do Google Sheets.
 */
async function registrarAcesso() {
  try {
    // Cria um objeto com os dados
    const data = {
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent
    };
    
    // Converte o objeto em uma string de consulta (Query String)
    const queryString = new URLSearchParams(data).toString();

    // Configura as opções para a requisição POST
    const fetchOptions = {
      method: 'POST',
      body: queryString, // Envia como string de consulta
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Tipo de conteúdo que não dispara preflight
      }
    };

    // Envia a requisição para a API do Apps Script
    const apiResponse = await fetch(WEB_APP_URL, fetchOptions);
    const result = await apiResponse.json();
    
    console.log('Resultado do registro:', result);

  } catch (error) {
    console.error('Erro ao registrar acesso:', error);
  }
}

// Chama a função para registrar o acesso assim que a página é carregada
document.addEventListener('DOMContentLoaded', registrarAcesso);

// Chama a função para registrar o acesso assim que a página é carregada
document.addEventListener('DOMContentLoaded', registrarAcesso);

