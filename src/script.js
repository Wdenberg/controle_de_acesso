

const dataAtual = new Date();
const dataFormatada = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()} ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;

console.log(dataFormatada);

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbw8HeGykTpPX-vpivJ_LeMYhElVn-iL71urgx-SG7UvI1s0Q7CTfsGCKWpfeTFEpzif/exec';
/**
 * Registra o acesso à página na planilha do Google Sheets.
 */
async function registrarAcesso() {
  try {
    // Cria o objeto com os dados para enviar para o Apps Script
    const data = {
      timestamp: new Date().toISOString(), // Captura a data e hora atuais no formato ISO 8601
      page: window.location.pathname,     // Pega a URL da página atual
      userAgent: navigator.userAgent      // Pega o navegador e OS do usuário
    };

    // Configura as opções para a requisição POST
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
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

