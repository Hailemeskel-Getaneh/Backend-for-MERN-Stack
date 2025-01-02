import express from 'express';
import productsModel from '../Models/productsModel.js';
const router = express.Router();


router.get('/', async(req, res) => {
    try{  
        const products = await productsModel.find();
        res.status(201).json(products)
    }
    catch(error){
        res.status(404).json({message:'Error in fetching the data'})
    }
})

router.get('/:id', async(req, res) => {
    try{  
        const products = await productsModel.findById(req.params.id == productsModel.id);
        res.status(201).json(products)
    }
    catch(error){
        res.status(404).json({message:'Error in fetching the data'})
    }
})

router.post('/', async(req, res) => {
    try{
        const{name, price, catagory, stock} = req.body;
        const newProduct = new productsModel({
            name, price, catagory,stock
        })

        await newProduct.save();
        res.status(200).json({message:"Product created successfully"})
    }
    catch(err){  
        if(err.code === 11000){
            res.status(400).json({message :"product already exits"})
        }
        else{
            res.status(500).json({error:"internal server error"})
        }
    }
})

//updating a product

router.put('/:id', async (req, res) =>{
    try{
        const updatedProduct = await productsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators:true}
        )

        if(!updatedProduct)
            {
                return res.status(404).json({message:"Product not found"})
            }
            res.status(200).json({updatedProduct})
        
    }
  
    catch(err){
        res.status(400).json({message:"Error upadating product", error:err.message})
    }
    
})


//delete a product from the model

router.delete('/:id', async (req, res) =>{
    try{
       
        const itemsId = req.params.id;
        const deletedProduct = await productsModel.findByIdAndDelete(itemsId)
            
        if (!deletedProduct)
        return res.status(400).json({message:"Product not found"})
    
        res.status(200).json({message:"Product deleted successfully"})
        
    }
  
    catch(err){
        res.status(400).json({message:"Error deleting product", error:err.message})
    }
    
})


export default router;

