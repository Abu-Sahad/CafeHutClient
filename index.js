const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefCategories = require('./data/chefFood.json');
app.use(cors());
app.get('/chefCategories', (req, res) => {
    // console.log(categories);
    res.send(chefCategories);
})

app.get('/', (req, res) => {
    res.send('chef is running')
})

app.listen(port, () => {
    console.log(`Chef-hut listening on port ${port}`)
})