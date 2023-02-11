// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     if (Array.isArray(data)) {
//       const productList = document.querySelector('.product-list');

//       productList.innerHTML = data.map(product => {
//         return `
//           <div class="product-item">
//             <img src="${product.image}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.price}</p>
//           </div>
//         `;
//       }).join('');
//     } else {
//       console.error('The data returned from the API is not an array.');
//     }
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.products)) {
      console.log(data.products);
      const productList = document.querySelector('.productList');

      productList.innerHTML = data.products.map(product => {
        return `
          <div class="product-item">
            <img src="${product.images[0]}" alt="${product.title}">
            <span class="sidewise"><h3>Title : ${product.title}</h3>  <h3>Brand : ${product.brand}</h3></span>
            <p>$${product.price}</p>
            <p>Rating : ${product.rating}</p>
            <p>Stock : ${product.stock}</p>
          </div>
        `;
      }).join('');
    } else {
      console.error('The data.products property is not an array.');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
