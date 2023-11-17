const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static('.'));

// Set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// User-Agent list
const userAgentList = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0',
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1',
  // Add more User-Agent strings here
];

// Fetches the Amazon page for a given keyword
async function fetchAmazonPage(keyword) {
  // Wait for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Choose a random User-Agent
  const userAgent = userAgentList[Math.floor(Math.random() * userAgentList.length)];

  try {
    const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`, {
      headers: {
        'User-Agent': userAgent
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Amazon page: ${error}`);
    return '';
  }
}

// Parses the product details from the HTML of an Amazon page
function parseProductDetails(html, asin) {
  const $ = cheerio.load(html);
  let productDetails = null;
  let position = -1;

  $('.s-result-item').each((index, element) => {
    const productAsin = $(element).attr('data-asin');
    if (productAsin === asin) {
      const title = $(element).find('.a-link-normal .a-text-normal').text();
      const rating = $(element).find('.a-icon-star-small .a-icon-alt').text();
      const reviewCount = $(element).find('.a-link-normal .a-size-base').text();
      const imageUrl = $(element).find('.a-link-normal .s-image').attr('src');
      const productLink = $(element).find('.a-link-normal.a-text-normal').attr('href');
      productDetails = {
        title,
        rating,
        reviewCount,
        imageUrl,
        productLink: `https://www.amazon.com${productLink}`
      };
      position = index + 1;
      return false; // Termina o loop .each
    }
  });

  return { productDetails, position };
}

// Endpoint to scrape Amazon for a given keyword
app.get('/api/scrape', async (req, res) => {
  const asin = req.query.asin;
  const keyword = req.query.keyword;
  if (!asin || !keyword) {
    return res.status(400).json({ error: 'O ASIN e a palavra-chave não podem estar vazios' });
  }

  const html = await fetchAmazonPage(keyword);
  if (!html) {
    return res.status(500).json({ error: 'Falha ao raspar a Amazon' });
  }

  const { productDetails, position } = parseProductDetails(html, asin);
  res.json({ productDetails, position });
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
