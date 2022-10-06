const pupperteer = require("puppeteer");

        // Await => Aguarde até que
        // async => Assíncrona

    async function Bot() {        
        const browser = await pupperteer.launch({ headless: false });

    // A const page está aguardando o navegador abrir uma nova página    
        const page = await browser.newPage();

        // Aqui estamos falando para qual endereço url o site deve acessar e networkidle0 é para carregar os arquivos,scripts da página
            await page.goto("https://web.whatsapp.com/", { waitUntil: "networkidle0" });  
        // Após isso, pedimos para ela aguardar um tempo, nesse caso 9 segundos
            await delay(90000);

        // Estou pedindo para ele clicar em uma class que o WhatsApp atribui e chamando meu contato (Conforme está salvo)
            await page.click('._2nY6U span[title="Gu"]');
            await delay(20000);

        //Aqui ele clica na barra de digitação (pela class gerada) e manda uma mensagem que foi atribuida
            await page.type('.g0rxnol2', 'Mensagem Bot');
            delay(10000)
        //Evento de click no icon ->send para enviar a mensagem
            await page.click('span[data-icon="send"]');
            
        //Aqui será criado um loop para limitar a quantidade de disparos de mensagens (implementação)
    } 
 
    Bot();


    // => Função criada para definir tempo 
    function delay(time){
        return new Promise(function (resolve){
            setTimeout(resolve, time);
        });
    }