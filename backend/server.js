const express = require ('express');
const data = require ('./data.js');
const app = express();

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