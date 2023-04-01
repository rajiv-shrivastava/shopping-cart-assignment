const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const products = require("./server/products/index.get.json")
const banners = require("./server/banners/index.get.json")
const categories = require("./server/categories/index.get.json")
const cors = require("cors")

app.use(cors({ credentials: true }))

app.listen(port, () => console.log(`Listening on port ${port}`)); 


app.get('/', (req, res) => { 
    res.send({ home: 'welcome to home page for express' }); 
}); 


app.get('/products', (req, res,next) => { 
    res.send({ products }); 
});

app.get('/banners', (req, res) => { 
    res.send({ banners }); 
});

app.get('/categories', (req, res) => { 
    res.send({ categories }); 
});