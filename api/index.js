const router = require('express').Router();
const { Product } = require('../database');

module.exports = router;

// GET all products
router.get('/products', async (req, res, next) => {
  //
  try {
    const allProducts = await Product.findAll();
    console.log(allProducts);
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
});

// GET single product
router.get('/products/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

// POST updates the likes
router.put('/products/:id', async (req, res, next) => {
  try {
    console.log(req.body);
    const data = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(data);
  } catch (err) {
    next(err);
  }
});

//404 error handling
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});
