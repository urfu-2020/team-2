import path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") })
const config = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectURI: process.env.REDIRECT_URI, // "https://kilogram-team-2.herokuapp.com:9000/oauth-callback"
  authURI: "https://github.com/login/oauth/authorize",
  tokenURI: "https://github.com/login/oauth/access_token",
  userURI: "https://api.github.com/user",
  clientPort: 80,
  serverPort: 9000,
  host: "http://localhost",
}

module.exports = config
