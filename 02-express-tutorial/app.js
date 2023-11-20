const express = require('express');
const app = express();

// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   next();
// };

// app.use(['/', '/about'], logger);

// app.get('/', (req, res) => {
//   res.send('Home');
// });
// app.get('/about', (req, res) => {
//   res.send('About');
// });

//app.use(express.static('./methods-public'));

const { products, people } = require('./data');
const peopleRouter = require('./routes/people');

app.use(express.json());

app.use('/api/v1/people', peopleRouter);

// app.get('/api/v1/people', (req, res) => {
//   res.json(people);
// });

// app.post('/api/v1/people', (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' });
//   }
//   people.push({ id: people.length + 1, name: req.body.name });
//   res.status(201).json({ success: true, name: req.body.name });
// });

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
