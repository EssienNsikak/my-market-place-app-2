const express = require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require ('./routers/userRouter.js');
const productRouter = require ('./routers/productRouter.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/my-market-place-app-2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)

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