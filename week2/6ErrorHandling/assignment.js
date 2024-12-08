import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors())
app.use(express.json()); // Middleware for parsing JSON request bodies
app.use(morgan('tiny')) // logs HTTP requests

// Example in-memory database
let products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { idv:3, name: 'PC bag', Price: 1800}
];

// Helper function to validate if ID is a valid number
const isValidId = (id) => !isNaN(id) && Number.isInteger(parseFloat(id));

// GET all products
app.get('/products', (req, res) => {
    res.status(200).json({ success: true, data: products });
});

// GET a product by ID
app.get('/products/:id', (req, res) => {
    const { id } = req.params.id;

    // Check if ID is valid
    if (!isValidId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID.' });
    }

    const product = products.find((p) => p.id === parseInt(id));

    // If product not found
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    res.status(200).json({ success: true, data: product });
});

// CREATE a product
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    // Basic validation
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ success: false, message: 'Invalid input. Name and price are required.' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);
    res.status(201).json({ success: true, data: newProduct });
});

// UPDATE a product
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    // Check if ID is valid
    if (!isValidId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID.' });
    }

    const product = products.find((p) => p.id === parseInt(id));

    // If product not found
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    // Update product details
    if (name) product.name = name;
    if (typeof price === 'number') product.price = price;

    res.status(200).json({ success: true, data: product });
});

// DELETE a product
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;

    // Check if ID is valid
    if (!isValidId(id)) {
        return res.status(400).json({ success: false, message: 'Invalid product ID.' });
    }

    const productIndex = products.findIndex((p) => p.id === parseInt(id));

    // If product not found
    if (productIndex === -1) {
        return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    // Remove product
    products.splice(productIndex, 1);

    res.status(200).json({ success: true, message: 'Product deleted successfully.' });
});

const PORT = 4040;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
    
})