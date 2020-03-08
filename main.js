const express = require('express')
const magic = express()
require('dotenv').config()

magic.set('view engine','ejs')

magic.use(express.static(__dirname + '/public'));

magic.listen(process.env.PORT,()=>{
    console.log('🏃 up and running 🏃')
})


magic.get('/',(req,res)=>res.render('main'))