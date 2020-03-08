const mongoose = require('mongoose')
const sd = require('shortid')

const ulrSchema = new mongoose.Schema({
input: {
    type:String,
    required:true
},
output: {
    type:String,
    required:true
},
createdAt: {
    type: Date,
    default : new Date()
}
})

module.exports = mongoose.model('Url',ulrSchema,'urls')