const router = require('express').Router();
const pizzaController = require('../../controllers/pizza-controller');

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

// add prefix of `/pizzas` to routes created in `pizza-routes.js1
router.use('/pizzas', pizzaRoutes);

module.exports = router;