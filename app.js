const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

async function fetchAmazonPage(keyword) {
  const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`);
  return response.data;
}

function parseProductDetails(html) {
  const $ = cheerio.load(html);
  const productDetails = [];

  $('.s-result-item').each((index, element) => {
    const title = $(element).find('.a-link-normal .a-text-normal').text();
    const rating = $(element).find('.a-icon-star-small .a-icon-alt').text();
    const reviewCount = $(element).find('.a-link-normal .a-size-base').text();
    const imageUrl = $(element).find('.a-link-normal .s-image').attr('src');

    productDetails.push({
      title,
      rating,
      reviewCount,
      imageUrl
    });
  });

  return productDetails;
}

app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword;
  const html = await fetchAmazonPage(keyword);
  const productDetails = parseProductDetails(html);
  res.json(productDetails);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const path = require('path');

// ...

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});