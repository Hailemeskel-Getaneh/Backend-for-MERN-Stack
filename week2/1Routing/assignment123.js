const express = require('express');

const app = express();

app.use(express.json())

app.route('/products')
.get((req, res) => {
    res.send('List of the products')
})

.post((req, res)=>{
    res.send('Add a product')
})

app.get('/products/:id' , (req, res) =>{

    const product = req.params.id;
    res.send(`Product with Id : ${product}`)
})



const PORT = 5000;

app.listen(PORT, (req, res) => {
    console.log('Server is runnign at ', PORT)
})