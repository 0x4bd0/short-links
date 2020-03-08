const express = require( 'express' )
const router = express.Router()
const { check, validationResult } = require( 'express-validator' )

const prefix = 'url'

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

	}
)


module.exports = router
