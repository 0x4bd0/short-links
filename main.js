const express = require('express')
const magic = express()
const router = express.Router()
const mongoose = require('mongoose')
const su = require('./models/urls')
const URL =require('./controllers/main')
require('dotenv').config()

router.use(URL);

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

magic.set('view engine','ejs')

magic.use(express.static(__dirname + '/public'))

magic.listen(process.env.PORT,()=>{
    console.log('🏃 up and running 🏃')
})


magic.get('/',(req,res)=>res.render('main'))