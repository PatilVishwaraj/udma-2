import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
const port = process.env.PORT || 5000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
export const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bndflki.mongodb.net/?retryWrites=true&w=majority`;
Connection(URL);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/udma/build'));
}
app.listen(5000, () => console.log(`server is on ${port}`));
