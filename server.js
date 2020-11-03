const path = require('path');
const express = require('express');
const { db } = require('./database');

//pull in api routes
const productRoutes = require('./api/products');

const app = express();

// static files
app.use(express.static(path.join(__dirname, 'build')));

// Make sure we can parse JSON request bodies and encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount routes
// when a request begins with products, we will access
app.use('/products', productRoutes);

//if the environment is production, make sure you send the public files
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

//configure error handling middleware last
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send(err.message || 'Internal server error.');
});

const PORT = process.env.PORT || 5000;

//Every time the server starts, we want to sync up with the database before it starts listening for requests. db.sync() is asynchronous, and it returns a Promise so async function is needed
async function startServer() {
  try {
    //if this were
    await db.sync();
    console.log('db sync');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
startServer();
