const express = require("express")
const app = express()

const config = require("../config")

app.get("/", (req, res) => {
	res.send("Hello, world!")
})

app.all("*", (req, res) => {
	res.sendStatus(404)
})

app.listen(config.serverPort || 80)
