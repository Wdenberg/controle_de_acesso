 // Substitua a URL abaixo pela URL do seu Apps Script
    const appsScriptUrl = "https://script.google.com/macros/s/AKfycbylHgTgQj_pY-EVsY_wtthERG-TrJTALB1dioH_AZDr2S4gY7oxHJP0ZzZtRvdQz93c/exec";

    // Função para obter o IP do usuário (opcional, mas útil)
    async function getIpAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error('Erro ao obter o IP:', error);
            return 'Desconhecido';
        }
    }

    // Função para enviar os dados ao Apps Script
    async function sendAccessLog() {
        const ip = await getIpAddress();
        const url = `${appsScriptUrl}?ipAddress=${ip}`;

        fetch(url)
            .then(response => {
                // Você pode adicionar um console.log para depuração
                // console.log('Log de acesso enviado:', response);
            })
            .catch(error => {
                console.error('Erro ao enviar o log de acesso:', error);
            });
    }

    // Chama a função quando a página é carregada
    window.onload = sendAccessLog;