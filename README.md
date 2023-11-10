# Amazon Data Scraping Project (EN/US)

This project is a simple web application that scrapes data from Amazon product listings based on a provided search keyword. The application is divided into two parts: the backend, which is built with Node.js, and the frontend, which is built with HTML, CSS, and JavaScript.

## Backend (Node.js)

The backend is responsible for fetching the Amazon search results page for a given keyword and extracting the product details.

### Dependencies

- **express**: Web framework to create the application.
- **axios**: Library to make HTTP requests.
- **cheerio**: Library to parse and manipulate HTML.

### Features

1. Fetches the Amazon search results page for a given keyword.
2. Parses the HTML content and extracts the following details for each product listing on the first page:
    * Product Title
    * Rating (out of five stars)
    * Number of Reviews
    * Product Image URL
3. Provides an endpoint `/api/scrape` where a GET request with a query parameter `?keyword=yourKeyword` initiates the scraping process and returns the extracted data in JSON format.

## Frontend (HTML, CSS, JavaScript)

The frontend is a simple web page that allows the user to input a search keyword and start the scraping process.

### Features

1. Provides an input field to enter the search keyword.
2. Provides a button to start the scraping process.
3. Makes an AJAX call to the backend endpoint when the button is clicked and displays the formatted results cleanly on the page.

## Documentation

The code is well-commented to provide clarity about the logic and process. This README.md file provides setup and execution instructions.

## Considerations

1. The application handles errors gracefully both on the backend and frontend.
2. Clear instructions on how to run the application are provided below.

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

### Funcionalidades

1. Busca a página de resultados de pesquisa da Amazon para uma palavra-chave fornecida.
2. Analisa o conteúdo HTML e extrai os seguintes detalhes para cada listagem de produto na primeira página:
    * Título do Produto
    * Avaliação (estrelas de cinco)
    * Número de avaliações
    * URL da imagem do produto
3. Fornece um endpoint `/api/scrape` onde uma solicitação GET com um parâmetro de consulta `?keyword=suaPalavraChave` inicia o processo de raspagem e retorna os dados extraídos no formato JSON.

## Frontend (HTML, CSS, JavaScript)

O frontend é uma página web simples que permite ao usuário inserir uma palavra-chave de pesquisa e iniciar o processo de raspagem.

### Funcionalidades

1. Fornece um campo de entrada para inserir a palavra-chave de pesquisa.
2. Fornece um botão para iniciar o processo de raspagem.
3. Faz uma chamada AJAX ao endpoint do backend quando o botão é clicado e exibe os resultados formatados de maneira limpa na página.

## Documentação

O código é bem comentado para oferecer clareza sobre a lógica e o processo. Este arquivo README.md fornece instruções de configuração e execução.

## Considerações

1. O aplicativo lida com erros de maneira elegante tanto no backend quanto no frontend.
2. As instruções sobre como executar o aplicativo são fornecidas abaixo.

## Como executar o aplicativo

1. Clone o repositório para o seu computador local.
2. Navegue até o diretório do projeto no terminal.
3. Certifique-se que tem o NodeJs em seu pc (ele é necessário), após, instale as dependências do projeto com o comando `npm install`.
4. Inicie o servidor com o comando `node app.js`.
5. Abra um navegador web e navegue até `http://localhost:3000` para ver a aplicação em ação.

## Nota

Por favor, note que este é um projeto de demonstração e não é destinado a ser usado para atividades de raspagem de dados em grande escala. A raspagem de dados deve ser realizada de acordo com os termos de serviço do site alvo e as leis e regulamentos aplicáveis.