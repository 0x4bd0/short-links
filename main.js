const express = require('express')
const magic = express()
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.DB_URLN{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
magic.set('view engine','ejs')

magic.use(express.static(__dirname + '/public'));

magic.listen(process.env.PORT,()=>{
    console.log('🏃 up and running 🏃')
})


magic.get('/',(req,res)=>res.render('main'))