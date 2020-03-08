const mongoose = require('mongoose')
const 

const ulrSchema = new mongoose.Schema({
input: {
    type:String,
    required:true
},
output: {
    type:String,
    required:true
}
})