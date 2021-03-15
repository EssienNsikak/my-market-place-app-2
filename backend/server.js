const express = require ('express');
const mongoose = require('mongoose');
const userRouter = require ('./routers/userRouter.js');
const data = require ('./data.js');

const app = express();
mongoose.connect(process.env.MONGOBD_URL || 'mongodb://localhost/my-market-place-app-2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

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

app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
  res.send('Server is up and running')
});

app.use(( err, req, res, next ) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});