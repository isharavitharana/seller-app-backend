import express from 'express';
import { MONGODB_URI } from './util/secrets';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import compression from 'compression';
import bodyParser from 'body-parser';
import ping from './controllers/ping';
import * as productController from './controllers/product';
import cors from 'cors';

const app = express();

const mongoURI = MONGODB_URI;

mongoose.Promise = bluebird;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(`MongoDB connection error. ${err}`);
  });

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//primary app routes

app.use('/ping', ping);
app.get('/products', productController.getAllProducts);
app.get('/favourite-products', productController.getFavouriteProducts);
app.put('/change-favourite/:id', productController.handleFavouriteProduct);

export default app;
