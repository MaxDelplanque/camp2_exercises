// Remenber that the API is located at https://decath-product-api.herokuapp.com/.
// 1. Let's get a product with its id: efe288cb-fb63-4b23-b8df-529f04b8b02b.
// Start by ending your request by displaying the JavaScript resulting.
// 2. On the same chain of promises, get the title of the brand of this product

const fetch = require("node-fetch");

function getTitleOfBrandForAProductWithItsId(id) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${id}`)
    .then(response => response.json())
    .then(product => product.brand_id)
    .then(brand_id => fetch(`https://decath-product-api.herokuapp.com/brands/${brand_id}`))
    .then(response => response.json())
    .then(brand => brand.title)
    .catch((error) => {
      console.warn(error);
    });
}

getTitleOfBrandForAProductWithItsId("efe288cb-fb63-4b23-b8df-529f04b8b02b")
  .then((brandTitle) => console.log(brandTitle));

module.exports = getTitleOfBrandForAProductWithItsId;

// function getProductWithItsId(id) {
//   fetch(`https://decath-product-api.herokuapp.com/products/${id}`)
//     .then(response => response.json())
//     .then(resp => console.log(resp))
//     .catch((error) => {
//       console.warn(error);
//     });
// }
//
// console.log(getProductWithItsId("efe288cb-fb63-4b23-b8df-529f04b8b02b"));


// fetch("https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b")
//   .then(response => response.json())
//   // .then(function(result) {
//   //   return result[0];
//   // })
//   .then(resp => console.log(resp))
//   .catch((error) => {
//     console.warn(error);
//   });
