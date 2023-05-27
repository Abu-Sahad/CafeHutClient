const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefCategories = require('./data/chefFood.json');
const individualChef = require('./data/recepyDetails.json')
app.use(cors());
app.get('/chefCategories', (req, res) => {
    res.send(chefCategories);
})

app.get('/chefCategories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const categoryRecipe = individualChef.filter(n => parseInt(n.recipe_id) === id);
    const chef = chefCategories.find(n => parseInt(n.id) === id);
    res.send({ recipe: categoryRecipe, chef })


})

app.get('/', (req, res) => {
    res.send('chef hut is running')
})


app.listen(port, () => {
    console.log(`Chef-hut listening on port ${port}`)
})