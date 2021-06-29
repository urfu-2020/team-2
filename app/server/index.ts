import express from "express"
const {
  clientID,
  clientSecret,
  redirectURI,
  authURI,
  tokenURI,
  userURI,
  clientPort,
  serverPort,
  dbUser,
  dbPass,
} = require("./config")
const cors = require("cors")
const session = require("express-session")

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.use(
  session({
    secret: clientSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: "auto",
      httpOnly: true,
      maxAge: 3600000,
    },
  })
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

app.listen(serverPort, () =>
  console.log(`Backend server is listening on port ${serverPort}`)
)
