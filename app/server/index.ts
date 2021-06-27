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
} = require("./config")
const cors = require("cors")
const session = require("express-session")
import { Users, User } from "./db"

const app = express()
const db = new Users()

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

app.post("/logout", (req, res) => {
  const userName = req.body.login
  if (db.hasOwnProperty(userName)) {
    db[userName].isLogin = false
  }
})

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.all("*", (req, res) => {
  res.sendStatus(404)
})

app.listen(serverPort, () =>
  console.log(`Backend server is listening on port ${serverPort}`)
)
