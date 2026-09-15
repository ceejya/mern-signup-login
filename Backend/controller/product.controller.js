const cloudinary = require("../Utils/Cloudinary")
const productmodel =  require("../module/product.model")



const addProduct = async (req, res)=>{
    try {
        const {productname, productprice, productdescription, productimage, stock} = req.body

        if (!productname || !productprice, !productdescription, !productimage, !stock) {
          return  res.status(400).json({message: "All field are mandatory", status: false})           
        }

     const uploadedimage = await cloudinary.uploader.upload(productimage, {folder: "productspage"})
     console.log(uploadedimage);





     

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message, status:false})
        
        
    }

}
module.exports = {addProduct}