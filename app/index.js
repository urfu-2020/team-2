const express = require("express");
const app = express();

const db = require("db");

db.initialize();

app.get("/", (req, res) => {
	res.send("Hello, world!")
});

app.all("*", (req, res) => {
	res.sendStatus(404)
});

app.listen(process.env.PORT || 80);
