const express = require("express")
// eslint-disable-next-line new-cap
const router = express.Router()
const config = require("../config")

router.get("/", (req, res) => {
	res.redirect(
		// eslint-disable-next-line max-len
		`${config.authURI}?scope=user&client_id=${config.clientID}&redirect_uri=${config.redirectURI}`, // &response_type=code
	)
})

module.exports = router
