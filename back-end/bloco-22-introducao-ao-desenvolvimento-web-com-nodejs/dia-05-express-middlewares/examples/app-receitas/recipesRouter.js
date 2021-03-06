const express = require('express');
const authMiddleware = require('./auth-middleware');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const checkName = (req, res, next) => {
  const { name } = req.body;
  return !name || name === ''
  ? res.status(400).json({ message: 'Invalid data!'})
  : next();
};

const checkPrice = (req, res, next) => {
  const { price } = req.body;
  (!price || price < 0 || typeof price !== 'number')
  ? res.status(400).json({ message: 'Invalid Price'})
  : next();
};

router.use(authMiddleware);

router.get('/', function (_req, res) {
  res.status(200).json(recipes);
});

router.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

router.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.post('/recipes', checkName, checkPrice,
(req, res) => {
  const { id, name, price, waitTime } = req.body;
  const { userName } = req.user;
  recipes.push({ id, name, price, waitTime, chef: userName });

  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/recipes/:id', checkName, checkPrice, 
  function (req, res) {
    const { id } = req.params;
    const { name, price, waitTime } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

    res.status(204).end();
  }
);

router.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;