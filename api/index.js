const router = require('express').Router();
module.exports = router;

router.use('/products', require('./products'));

//404 error handling
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});
