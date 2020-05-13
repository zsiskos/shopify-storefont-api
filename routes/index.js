let express = require('express');
let router = express.Router();
const request = require('request')
const rootURL = 'https://b6fa07c7b2a9d6f564e1105741af8a4d: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@zoe-siskos.myshopify.com/admin/api/2020-04/products.json'
const storeFrontAPI = require('../controllers/storefront')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', storeFrontAPI.apiCall)

// router.get('/products', function(req, res) {
//   const options = {
//     url: rootURL,
//     headers: {
//       'X-Shopify-Storefront-Access-Token': 'c1d039642629a7908c093cde386b7669'
//     }
//   };
//   request(options, function(err, res, body) {
//     const products = JSON.parse(body);
//     console.log(JSON.parse(body))
//     // res.render('product', {productData: body});
//     });
// });


module.exports = router;
