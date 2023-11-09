const express = require('express');
const app = express();
const port = 3000;
const cheerio = require('cheerio');

app.get('/api/scrape', async (req, res) => {
  // ... código anterior ...

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});

app.get('/api/scrape', (req, res) => {
    const keyword = req.query.keyword;
    // Aqui é onde o processo de raspagem será iniciado
  });

const axios = require('axios');

app.get('/api/scrape', async (req, res) => {
    const keyword = req.query.keyword;
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
  
    try {
      const response = await axios.get(url);
      const htmlContent = response.data;
      // O conteúdo HTML da página de resultados da Amazon agora está na variável htmlContent
    } catch (error) {
      res.status(500).send({ error: 'Ocorreu um erro ao buscar a página de resultados da Amazon' });
    }
});

const $ = cheerio.load(htmlContent);
const productDetails = [];

$('.s-result-item').each((index, element) => {
  const title = $(element).find('.a-link-normal .a-text-normal').text();
  const rating = $(element).find('.a-icon-alt').text();
  const reviews = $(element).find('.a-size-small .a-link-normal').text();
  const imageUrl = $(element).find('.s-image').attr('src');

  productDetails.push({
    title,
    rating,
    reviews,
    imageUrl
  });
});

res.send(productDetails);
});