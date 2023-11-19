const express = require('express');
//const path = require('path');

const app = express();

app.use(express.static('./public'));

const { products } = require('./data');

app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'It worked!' });
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(200).send('That product was not found');
  }

  res.json(product);
});

app.get('/api/v1/query', (req, res) => {
  //console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  //   if (cost) {
  //     //const maxPrice = parseInt(req.params.productID);
  //     sortedProducts = sortedProducts.filter((product) => {
  //       return product.price < Number(cost);
  //     });
  //   }

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send('no products matched your search');
  }
  res.status(200).json(sortedProducts);
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000....');
});
