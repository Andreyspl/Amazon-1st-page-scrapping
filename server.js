document.getElementById('scrape').addEventListener('click', async (event) => {
    event.preventDefault();

    const asin = document.getElementById('asin').value;
    const keyword = document.getElementById('keyword').value;
    if (!asin || !keyword) {
      document.getElementById('error').textContent = 'The ASIN/Keyword cannot be empty';
      document.getElementById('error').style.display = 'block';
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/scrape?asin=${asin}&keyword=${keyword}`);
      const data = await response.json();

      if (response.status !== 200) {
        throw new Error(data.error);
      }

      // Clear old results and error message
      document.getElementById('results').innerHTML = '';
      document.getElementById('error').style.display = 'none';

      

    if (data.productDetails) {
        // Display new results
        const productDiv = document.createElement('div');
        productDiv.className = 'card m-3';
        productDiv.style.width = '18rem';
        productDiv.innerHTML = `
          <img src="${data.productDetails.imageUrl}" class="card-img-top img-thumbnail" alt="${data.productDetails.title}">
          <div class="card-body">
            <h5 class="card-title">${data.productDetails.title}</h5>
            <p class="card-text">Position: ${data.position}</p>
            <a href="${data.productDetails.productLink}" target="_blank" class="btn btn-primary">View product details</a>
          </div>
        `;
        document.getElementById('results').appendChild(productDiv);
      }
    else
    {
        document.getElementById('error').textContent = 'Product not found';
        document.getElementById('error').style.display = 'block';
    }
    }
    catch (err) {
        console.log(err);
        document.getElementById('error').textContent = err.message;
        document.getElementById('error').style.display = 'block';
        }
});