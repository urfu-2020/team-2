const express = require("express")
// eslint-disable-next-line new-cap
const router = express.Router()
const config = require("../config")

router.get("/", (req, res) => {
	req.session.destroy()
	res.redirect(`${config.host}:${config.clientPort}`)
})

module.exports = router
