document.getElementById('scrape').addEventListener('click', async (event) => {
    event.preventDefault();

    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
      document.getElementById('error').textContent = 'The keyword cannot be empty';
      document.getElementById('error').style.display = 'block';
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/scrape?keyword=${keyword}`);
      const data = await response.json();

      if (response.status !== 200) {
        throw new Error(data.error);
      }

      // Clear old results and error message
      document.getElementById('results').innerHTML = '';
      document.getElementById('error').style.display = 'none';

      // Display new results
      data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'card m-3';
        productDiv.style.width = '18rem';
        productDiv.innerHTML = `
          <img src="${product.imageUrl}" class="card-img-top img-thumbnail" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Rating: ${product.rating}</p>
            <p class="card-text">Review Count: ${product.reviewCount}</p>
            <a href="${product.productLink}" target="_blank" class="btn btn-primary">View Details</a>
          </div>
        `;
        document.getElementById('results').appendChild(productDiv);
      });
    } catch (error) {
      document.getElementById('error').textContent = error.message;
      document.getElementById('error').style.display = 'block';
    }
  });