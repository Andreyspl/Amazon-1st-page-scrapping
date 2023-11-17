# Amazon Data Scraping Project (EN/US)

This project is a simple web application that scrapes data from Amazon product listings based on a provided search keyword. The application is divided into two parts: the backend, which is built with Node.js, and the frontend, which is built with HTML, CSS, and JavaScript.

## Backend (Node.js)

The backend is responsible for fetching the Amazon search results page for a given keyword and extracting the product details.

### Dependencies

- **express**: Web framework to create the application.
- **axios**: Library to make HTTP requests.
- **cheerio**: Library to parse and manipulate HTML.

### Features in main

1. Fetches the Amazon search results page for a given keyword.
2. Parses the HTML content and extracts the following details for each product listing on the first page:
    * Product Title
    * Rating (out of five stars)
    * Number of Reviews
    * Product Image URL
    * Product page in Amazon
3. Provides an endpoint `/api/scrape` where a GET request with a query parameter `?keyword=yourKeyword` initiates the scraping process and returns the extracted data in JSON format.

### Features in product-asin branch

1. Fetches an Amazon product by a search for a given keyword and ASIN (Amazon Standard Identification Number).
2. Parses the HTML content and extracts the following details of an specific product listing on the search page:
    * Product Title
    * Rating (out of five stars)
    * Number of Reviews
    * Product Image URL
    * Product position in the search
    * Product page in Amazon
3. Provides an endpoint `/api/scrape` where a GET request with a query parameter `?asin=asin` and `?keyword=yourKeyword`, and initiates the scraping process and returns the extracted data in JSON format.

## Frontend (HTML, CSS, JavaScript)

The frontend is a simple web page that allows the user to input a search keyword and start the scraping process.

### Features

1. Provides an input field to enter the search keyword (and ASIN if you are in the product-asin branch).
2. Provides a button to start the scraping process.
3. Makes an AJAX call to the backend endpoint when the button is clicked and displays the formatted results cleanly on the page.

## Documentation

The code is well-commented to provide clarity about the logic and process. This README.md file provides setup and execution instructions.

## Considerations

1. The application handles errors gracefully both on the backend and frontend.
2. Clear instructions on how to run the application are provided below.
3. The difference in product position can be due to various factors. Here are some possible reasons:
    * Personalization: Amazon personalizes search results based on the user's browsing and purchasing history. If you are logged into your Amazon account when you perform the search, the results may differ from the results obtained by the scraping script, which is not logged into an account.
    * Location: Amazon may show different results based on the user's location.
    * Time: Amazon search results may change over time. If there is a delay between when you manually performed the search and when the scraping script performed the search, the results may have changed.
    * User-Agent: Amazon may show different results based on the User-Agent of the request. If your scraping script is using a different User-Agent than your browser, the results may differ.

## How to Run the Application

1. Clone the repository to your local computer.
2. Navigate to the project directory in the terminal.
3. Make sure you have NodeJs on your pc (it's necessary), then install the project dependencies with the command `npm install`.
4. Start the server with the command `node app.js`.
5. Open a web browser and navigate to `http://localhost:3000` to see the application in action.

## Note

Please note that this is a demonstration project and is not intended to be used for large-scale data scraping activities. Data scraping should be conducted in accordance with the terms of service of the target site and applicable laws and regulations.

---------------------------------------------------------------------------------------------

# Projeto de Raspagem de Dados da Amazon (PT/BR)

Este projeto é uma aplicação web simples que raspa dados de listagens de produtos da Amazon com base em uma palavra-chave de pesquisa fornecida. A aplicação é dividida em duas partes: o backend, que é construído com Node.js, e o frontend, que é construído com HTML, CSS e JavaScript.

## Backend (Node.js)

O backend é responsável por buscar a página de resultados de pesquisa da Amazon para uma palavra-chave fornecida e extrair os detalhes do produto.

### Dependências

- **express**: Framework web para criar a aplicação.
- **axios**: Biblioteca para fazer requisições HTTP.
- **cheerio**: Biblioteca para analisar e manipular HTML.

### Funcionalidades na branch principal

1. Busca a página de resultados de pesquisa da Amazon para uma palavra-chave fornecida.
2. Analisa o conteúdo HTML e extrai os seguintes detalhes para cada listagem de produto na primeira página:
    * Título do Produto
    * Avaliação (estrelas de cinco)
    * Número de avaliações
    * URL da imagem do produto
    * Página do produto na Amazon
3. Fornece um endpoint `/api/scrape` onde uma solicitação GET com um parâmetro de consulta `?keyword=suaPalavraChave` inicia o processo de raspagem e retorna os dados extraídos no formato JSON.

### Funcionalidades na branch product-asin

1. Busca um produto da Amazon por uma pesquisa para uma determinada palavra-chave e ASIN (Amazon Standard Identification Number).
2. Analisa o conteúdo HTML e extrai os seguintes detalhes de uma listagem de produto específica na página de pesquisa:
    * Título do Produto
    * Avaliação (estrelas de cinco)
    * Número de avaliações
    * URL da imagem do produto
    * Posição do produto na pesquisa
    * Página do produto na Amazon
3. Fornece um endpoint `/api/scrape` onde uma solicitação GET com um parâmetro de consulta `?asin=asin` e `?keyword=suaPalavraChave`, e inicia o processo de raspagem e retorna os dados extraídos no formato JSON.

## Frontend (HTML, CSS, JavaScript)

O frontend é uma página web simples que permite ao usuário inserir uma palavra-chave de pesquisa e iniciar o processo de raspagem.

### Funcionalidades

1. Fornece um campo de entrada para inserir a palavra-chave de pesquisa (e ASIN se você estiver na branch product-asin).
2. Fornece um botão para iniciar o processo de raspagem.
3. Faz uma chamada AJAX ao endpoint do backend quando o botão é clicado e exibe os resultados formatados de maneira limpa na página.

## Documentação

O código é bem comentado para oferecer clareza sobre a lógica e o processo. Este arquivo README.md fornece instruções de configuração e execução.

## Considerações

1. O aplicativo lida com erros de maneira elegante tanto no backend quanto no frontend.
2. As instruções sobre como executar o aplicativo são fornecidas abaixo.
3. A diferença na posição do produto pode ser devida a vários fatores. Aqui estão algumas possíveis razões:
    * Personalização: A Amazon personaliza os resultados da pesquisa com base no histórico de navegação e compra do usuário. Se você estiver conectado à sua conta da Amazon quando fizer a pesquisa, os resultados podem ser diferentes dos resultados obtidos pelo script de raspagem, que não está conectado a uma conta.
    * Localização: A Amazon pode mostrar resultados diferentes com base na localização do usuário.
    * Tempo: Os resultados da pesquisa na Amazon podem mudar com o tempo. Se houver um atraso entre quando você fez a pesquisa manualmente e quando o script de raspagem fez a pesquisa, os resultados podem ter mudado.
    * User-Agent: A Amazon pode mostrar resultados diferentes com base no User-Agent da solicitação. Se o seu script de raspagem estiver usando um User-Agent diferente do seu navegador, os resultados podem ser diferentes.

## Como executar o aplicativo

1. Clone o repositório para o seu computador local.
2. Navegue até o diretório do projeto no terminal.
3. Certifique-se que tem o NodeJs em seu pc (ele é necessário), após, instale as dependências do projeto com o comando `npm install`.
4. Inicie o servidor com o comando `node app.js`.
5. Abra um navegador web e navegue até `http://localhost:3000` para ver a aplicação em ação.

## Nota

Por favor, note que este é um projeto de demonstração e não é destinado a ser usado para atividades de raspagem de dados em grande escala. A raspagem de dados deve ser realizada de acordo com os termos de serviço do site alvo e as leis e regulamentos aplicáveis.
