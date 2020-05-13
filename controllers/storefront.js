let express = require('express');
let router = express.Router();
const fetch = require('node-fetch');

module.exports = {
  apiCall

};

function apiCall(req, res) {
  const query = `{
    products(first: 20) {
      edges {
        node {
          title
          description
          images(first: 1) {
            edges {
              node {
                altText
                transformedSrc(maxWidth: 400, maxHeight: 400)
              }
            }
          }
        }
      }
    }
  }`;

  return fetch('https://zoe-siskos.myshopify.com/api/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN_SECRET
    },
    "body": query
  }).then(result => {
    return result.json();
  })
  .then(data => {
    console.log("data returned:\n", data);
    res.send(data);
  });
};
