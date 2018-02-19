'use strict';

// Boot script to initialize a list of products on DEV ENV

const products = require('../constants/products');

module.exports = function(app) {
  // Initialize a products list from config.development config
  // file if not on production environment.
  if (process.env.NODE_ENV !== 'production') {
    let Product = app.models.Product;

    products.map(product => {
      Product.upsert(product).then(res =>
        console.info(`Product ${res.name} upserted`)
      );
    });
  }
};
