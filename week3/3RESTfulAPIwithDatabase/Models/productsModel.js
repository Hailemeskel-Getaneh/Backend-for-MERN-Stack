import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product name is required']
    },
    price:{
        type:Number,
        required:[true, 'price is required'],
        min:[0, 'price must be positive']
    },
    catagory:{
        type:String,
        required:true,
        enum: ['Electronics', 'Books', 'Clothing', 'Other'], // Only allow specific categories
    },
    stock:{
        type:Number,
        required:true,
        default:0,
        min:[0, 'stock cannot be negative']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
// Create and export the model
const product = mongoose.model('products', productsSchema);

export default product;