const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let recipes = [
  { id: 1, name: 'Sample Recipe', description: 'Initial recipe seed' }
];
let ingredients = [
  { id: 1, name: 'Salt', quantity: 1, unit: 'tsp', recipeId: 1 }
];
let nextRecipeId = 2;
let nextIngredientId = 2;

const findRecipe = (id) => recipes.find((recipe) => recipe.id === id);
const findIngredient = (id) => ingredients.find((ingredient) => ingredient.id === id);

const validateRecipePayload = (payload) => {
  const { name, description } = payload;
  if (!name || !description) {
    return 'name and description are required';
  }
  return null;
};

const validateIngredientPayload = (payload, isPartial = false) => {
  const { name, quantity, unit, recipeId } = payload;
  if (!isPartial) {
    if (!name || quantity === undefined || !unit || recipeId === undefined) {
      return 'name, quantity, unit and recipeId are required';
    }
  }
  if (quantity !== undefined && typeof quantity !== 'number') {
    return 'quantity must be a number';
  }
  return null;
};

// Simple landing page to visualize usage in the browser
app.get('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html lang="es">
    <head>
      <meta charset="utf-8" />
      <title>Recipes API</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 820px; margin: 40px auto; padding: 0 18px; line-height: 1.6; color: #1f2933; background:#f8fafc; }
        h1, h2 { margin: 0 0 0.5em; }
        ul { padding-left: 18px; }
        code, pre { background: #111827; color: #f9fafb; padding: 10px; border-radius: 8px; display: block; white-space: pre-wrap; }
        a { color: #0f5fff; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .card { background: #fff; border-radius: 12px; padding: 18px; box-shadow: 0 6px 18px rgba(0,0,0,0.08); margin-bottom: 16px; }
      </style>
    </head>
    <body>
      <h1>Recipes API</h1>
      <div class="card">
        <p>API REST en ejecución. Consume las rutas JSON desde tu navegador o cliente (Bruno, Postman, curl).</p>
      </div>

      <div class="card">
        <h2>Recetas</h2>
        <ul>
          <li><a href="/recipes">GET /recipes</a></li>
          <li><a href="/recipes/1">GET /recipes/1</a></li>
          <li><a href="/recipes/1/ingredients">GET /recipes/1/ingredients</a></li>
        </ul>
      </div>

      <div class="card">
        <h2>Ingredientes</h2>
        <ul>
          <li><a href="/ingredients">GET /ingredients</a></li>
          <li><a href="/ingredients/1">GET /ingredients/1</a></li>
        </ul>
      </div>

      <div class="card">
        <h2>Ejemplos de payload</h2>
        <p>POST /recipes</p>
        <pre>{
  "name": "Tostada",
  "description": "Pan con mantequilla"
}</pre>
        <p>POST /ingredients</p>
        <pre>{
  "name": "Pan",
  "quantity": 2,
  "unit": "rebanadas",
  "recipeId": 1
}</pre>
      </div>
    </body>
    </html>`);
});

app.get('/recipes', (req, res) => {
  res.status(200).json(recipes);
});

app.get('/recipes/:id', (req, res) => {
  const id = Number(req.params.id);
  const recipe = findRecipe(id);
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }
  res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
  const error = validateRecipePayload(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }
  const newRecipe = {
    id: nextRecipeId++,
    name: req.body.name,
    description: req.body.description
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.put('/recipes/:id', (req, res) => {
  const id = Number(req.params.id);
  const recipe = findRecipe(id);
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }
  const error = validateRecipePayload(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }
  recipe.name = req.body.name;
  recipe.description = req.body.description;
  res.status(200).json(recipe);
});

app.patch('/recipes/:id', (req, res) => {
  const id = Number(req.params.id);
  const recipe = findRecipe(id);
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }
  if (req.body.name !== undefined) {
    recipe.name = req.body.name;
  }
  if (req.body.description !== undefined) {
    recipe.description = req.body.description;
  }
  res.status(200).json(recipe);
});

app.delete('/recipes/:id', (req, res) => {
  const id = Number(req.params.id);
  const recipe = findRecipe(id);
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }
  recipes = recipes.filter((r) => r.id !== id);
  ingredients = ingredients.filter((ing) => ing.recipeId !== id);
  res.status(204).send();
});

app.get('/ingredients', (req, res) => {
  res.status(200).json(ingredients);
});

app.get('/ingredients/:id', (req, res) => {
  const id = Number(req.params.id);
  const ingredient = findIngredient(id);
  if (!ingredient) {
    return res.status(404).json({ message: 'Ingredient not found' });
  }
  res.status(200).json(ingredient);
});

app.post('/ingredients', (req, res) => {
  const error = validateIngredientPayload(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }
  const recipe = findRecipe(Number(req.body.recipeId));
  if (!recipe) {
    return res.status(400).json({ message: 'recipeId does not exist' });
  }
  const newIngredient = {
    id: nextIngredientId++,
    name: req.body.name,
    quantity: req.body.quantity,
    unit: req.body.unit,
    recipeId: Number(req.body.recipeId)
  };
  ingredients.push(newIngredient);
  res.status(201).json(newIngredient);
});

app.put('/ingredients/:id', (req, res) => {
  const id = Number(req.params.id);
  const ingredient = findIngredient(id);
  if (!ingredient) {
    return res.status(404).json({ message: 'Ingredient not found' });
  }
  const error = validateIngredientPayload(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }
  const recipe = findRecipe(Number(req.body.recipeId));
  if (!recipe) {
    return res.status(400).json({ message: 'recipeId does not exist' });
  }
  ingredient.name = req.body.name;
  ingredient.quantity = req.body.quantity;
  ingredient.unit = req.body.unit;
  ingredient.recipeId = Number(req.body.recipeId);
  res.status(200).json(ingredient);
});

app.patch('/ingredients/:id', (req, res) => {
  const id = Number(req.params.id);
  const ingredient = findIngredient(id);
  if (!ingredient) {
    return res.status(404).json({ message: 'Ingredient not found' });
  }
  const error = validateIngredientPayload(req.body, true);
  if (error) {
    return res.status(400).json({ message: error });
  }
  if (req.body.recipeId !== undefined) {
    const recipe = findRecipe(Number(req.body.recipeId));
    if (!recipe) {
      return res.status(400).json({ message: 'recipeId does not exist' });
    }
    ingredient.recipeId = Number(req.body.recipeId);
  }
  if (req.body.name !== undefined) {
    ingredient.name = req.body.name;
  }
  if (req.body.quantity !== undefined) {
    ingredient.quantity = req.body.quantity;
  }
  if (req.body.unit !== undefined) {
    ingredient.unit = req.body.unit;
  }
  res.status(200).json(ingredient);
});

app.delete('/ingredients/:id', (req, res) => {
  const id = Number(req.params.id);
  const ingredient = findIngredient(id);
  if (!ingredient) {
    return res.status(404).json({ message: 'Ingredient not found' });
  }
  ingredients = ingredients.filter((ing) => ing.id !== id);
  res.status(204).send();
});

app.get('/recipes/:id/ingredients', (req, res) => {
  const id = Number(req.params.id);
  const recipe = findRecipe(id);
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }
  const recipeIngredients = ingredients.filter((ing) => ing.recipeId === id);
  res.status(200).json(recipeIngredients);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
