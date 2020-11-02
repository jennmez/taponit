const path = require('path');
const express = require('express');

//pull in api routes
const productRoutes = require('./api/products');

const app = express();

// static files
app.use(express.static(path.join(__dirname, 'build')));

// Make sure we can parse JSON request bodies and encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount routes
// when a request begins with products, we will access
app.use('/products', productRoutes);

//if the environment is production, make sure you send the public files
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// once we have the DB
// const syncDb = () => db.sync()

//configure error handling middleware last
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send(err.message || 'Internal server error.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
