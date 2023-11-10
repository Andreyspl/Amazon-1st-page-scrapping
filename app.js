const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Fetches the Amazon page for a given keyword
async function fetchAmazonPage(keyword) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
  });
  return response.data;
}

// Parses the product details from the HTML of an Amazon page
function parseProductDetails(html) {
  const $ = cheerio.load(html);
  const productDetails = [];

  $('.s-result-item').each((index, element) => {
    const title = $(element).find('.a-link-normal .a-text-normal').text();
    const rating = $(element).find('.a-icon-star-small .a-icon-alt').text();
    const reviewCount = $(element).find('.a-link-normal .a-size-base').text();
    const imageUrl = $(element).find('.a-link-normal .s-image').attr('src');
    // Only products with title, rating, reviewCount and image will be scrapped
    if (title && rating && reviewCount && imageUrl) {
      productDetails.push({
        title,
        rating,
        reviewCount,
        imageUrl
      });
    }
  });

  return productDetails;
}

// Endpoint to scrape Amazon for a given keyword
app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword;
  const html = await fetchAmazonPage(keyword);
  const productDetails = parseProductDetails(html);
  res.json(productDetails);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const path = require('path');

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
