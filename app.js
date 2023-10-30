const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const booksRouter = require('./routes/books.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', booksRouter);

mongoose.connect('mongodb://127.0.0.1/nodejsProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
