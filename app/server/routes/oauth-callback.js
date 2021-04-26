const express = require("express")
const router = express.Router()
const request = require("request")
const config = require("../config")

const tokenRegex = /access_token=(.*?)(&|\W)/

router.get("/", (req, res) => {
	request(
		{
			method: "POST",
			uri: `${config.tokenURI}`,
			form: {
				"client_id": config.clientID,
				"client_secret": config.clientSecret,
				"code": req.query.code,
				"redirect_uri": config.redirectURI,
			},
		},

		(error, response, body) => {
			req.session.token = body.match(tokenRegex)[1]
			console.log(req.session)
			// redirect to the React app
			res.redirect(`http://localhost:${config.clientPort}`)
		},
	)
})

module.exports = router
