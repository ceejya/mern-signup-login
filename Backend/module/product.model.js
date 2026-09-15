const mongoose = require("mongoose")

const productschema = mongoose.Schema({
    productname:{type:String, trim:true, required:true},
    productprice:{type:String, required:true},
    productdescription:{type:String, required:true},
    productimage:{},
    stock:{type:Number, required:true}
})

module.exports = productschema 