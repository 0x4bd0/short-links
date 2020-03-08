const express = require('express')
const magic = express()
require('dotenv').config()

magic.set('view engine','ejs')

magic.listen(process.env.PORT,()=>{
    console.log('🏃 up and running 🏃')
})


magic.get('/',(req,res)=>res.render('main'))