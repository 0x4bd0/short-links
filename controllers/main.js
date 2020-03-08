const express = require( 'express' )
const router = express.Router()
const { check, validationResult } = require( 'express-validator' )
const Url = require('../models/urls')
const rsg = require('randomstringsgenerator')


const prefix = 'url'


const generateUniqueString = async() => {
	let tmp = await rsg(5,['numbers','upperCase','lowerCase','specialChars'])
	if(await Url.findOne({output})){
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
		output : await agenerateUniqueString()
		})
		
		return res.send(await data.save())

	}
)


module.exports = router
