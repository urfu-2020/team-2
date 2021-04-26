const express = require("express")
const router = express.Router()

const config = require("../config")
const request = require("request")

router.get("/", (req, res) => {
	console.log(`user requested ${req.session.token}`)
	if (req.session.token) {
		request(
			{
				method: "GET",
				uri: `${config.userURI}`,
				headers: {
					"Authorization": `token ${req.session.token}`,
					"User-Agent": "node.js",
				},
			},

			(error, response, body) => {
				const userFullInfo = JSON.parse(body)
				if (userFullInfo === {}) {
					res.send({})
				}
				const userInfo = {
					login: userFullInfo.login,
					avatar_url: userFullInfo.avatar_url,
					name: userFullInfo.name,
				}
				console.log(userInfo)
				res.send(userInfo)
			},
		)
	} else {
		res.send({})
	}
})

module.exports = router
