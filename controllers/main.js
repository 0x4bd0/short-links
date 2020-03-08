const express = require( 'express' )
const router = express.Router()
const { check, validationResult } = require( 'express-validator' )
const Url = require('../models/urls')
const rsg = require('randomstringsgenerator')


const prefix = 'url'


const generateUniqueString = async() => {
	let tmp = await rsg(5,['numbers','upperCase','lowerCase'])
	if(await Url.findOne({'output':tmp})){
		await generateUniqueString()
	}
	return tmp
}

router.post(
	`/${ prefix }`,
	[
		check( 'url' )
			.not()
			.isEmpty()
			.withMessage( 'Please provide a URL' ),
	],
	async ( req, res ) => {

        const validationErrors = validationResult( req )

		if ( !validationErrors.isEmpty() ) {
			return res.status( 422 ).json( { errors: validationErrors.array() } )
		}

		let data = new Url({
		input : req.body.url,
		output : await generateUniqueString()
		})
		
		return res.send(await data.save())

	}
)

router.get(
	`/:output`,
	async ( req, res ) => {

		let data = await Url.findOne({'output':req.param.output})

		if(data){
			return res.redirect(data.input)
		} else {
			return res.status(400).send('URL NOT FOUND')
		} 
	
	}
)



module.exports = router
