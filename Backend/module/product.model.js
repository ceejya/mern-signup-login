const mongoose = require("mongoose")

const productschema = mongoose.Schema({
    productname:{type:String, trim:true, required:true},
    productprice:{type:Number, required:true, default:0},
    productdescription:{type:String, required:true},
    productimage:{type:String, required:true},
    stock:{type:Number, trim:true, required:true, default:0}
}, {timesamps:true})

module.exports = productschema 