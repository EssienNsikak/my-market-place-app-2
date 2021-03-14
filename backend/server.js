const express = require ('express');
const data = require ('./data.js');
const app = express();

app.get('/api/v1/product/:id', (req, res) => {
  const product = data.products.find( x => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found!' });
  }
});

app.get('/api/v1/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is up and running')
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});