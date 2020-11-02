const router = require('express').Router();
module.exports = router;

// GET all products
router.get('/', (req, res, next) => {
  res.sendStatus(200);
});
