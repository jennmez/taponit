const router = require('express').Router();
const { Product } = require('../database');

module.exports = router;

// GET all products
router.get('/', async (req, res, next) => {
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
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    console.log('in route', singleProduct);
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

// PUT updates the likes
router.put('/:id', async (req, res, next) => {
  try {
    console.log(req.body);
    const [rowsUpdated, [updatedProduct]] = await Product.update(
      { likes: req.body.likes },
      {
        returning: true,
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});
