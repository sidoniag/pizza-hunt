const router = require('express').Router();
const pizzaController = require('../../controllers/pizza-controller');
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js1
router.use('/pizzas', pizzaRoutes);

module.exports = router;