require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;
const app = express();
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const error = require('./middlwares/error');

mongoose.connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => console.log('Подключено к MongoDB'))
  .catch((err) => {
    console.error('Ошибка подключения к MongoDB:', err);
  });

app.use(express.json());

app.use(cookieParser());
app.use(router);

app.use(errors());
app.use(error);

app.listen(PORT, () => {
  console.log(`Слушаю порт: ${PORT}`);
});
