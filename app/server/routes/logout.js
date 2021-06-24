const express = require("express")
// eslint-disable-next-line new-cap
const router = express.Router()
const config = require("../config")

router.get("/", (req, res) => {
	req.session.destroy()
	res.redirect(`https://kilogram-team-2.herokuapp.com:${config.clientPort}`)
})

module.exports = router
