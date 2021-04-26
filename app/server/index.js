const express = require("express")
const config = require("./config")
const cors = require("cors")
const session = require("express-session")

const app = express()

app.use(express.json())
app.use(cors({
	origin: true,
	credentials: true,
}))
app.use(session(
	{
		secret: "1234567890",
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: "auto",
			httpOnly: true,
			maxAge: 3600000,
		},
	}),
)

app.use("/user", require("./routes/user"))
app.use("/login", require("./routes/login"))
app.use("/oauth-callback", require("./routes/oauth-callback"))
app.use("/logout", require("./routes/logout"))

app.get("/", (req, res) => {
	res.send("Hello, world!")
})

app.all("*", (req, res) => {
	res.sendStatus(404)
})

app.listen(config.serverPort,
	() => console.log(`Backend server is listening on port ${config.serverPort}`))
