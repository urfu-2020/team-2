const express = require("express")
// eslint-disable-next-line new-cap
const router = express.Router()

const config = require("../config")
const request = require("request")

import { User } from "../db"

const { MongoClient } = require("mongodb")
const uri = `mongodb+srv://${config.dbUser}:${config.dbPass}@kilogram-team-2.trvmk.mongodb.net/storage?retryWrites=true&w=majority`
const storage = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
storage.connect()

// eslint-disable-next-line max-len
router.get(
  "/",
  (
    req: { session: { token: any } },
    res: { send: (arg0: { login?: any; avatar_url?: any; name?: any }) => void }
  ) => {
    if (req.session.token) {
      request(
        {
          method: "GET",
          uri: `${config.userURI}`,
          headers: {
            Authorization: `token ${req.session.token}`,
            "User-Agent": "node.js",
          },
        },

        (error: any, response: any, body: string) => {
          const userFullInfo = JSON.parse(body)
          if (userFullInfo === {}) {
            res.send({})
          }
          const userInfo = {
            login: userFullInfo.login,
            avatar_url: userFullInfo.avatar_url,
            name: userFullInfo.name,
            friends: [],
          }

          const user: User = {
            login: userFullInfo.login,
            avatar: userFullInfo.avatar_url,
          }
          const findFilter = { login: user.login }
          try {
            const users = storage.db("storage").collection("users")
            users.findOne(findFilter).then((rec: any) => {
              if (rec) {
                console.debug(`${user.login} is login`)
              } else {
                users.insertOne(user)
                // console.debug(`${user.login} save in db`)
              }
            })
          } finally {
            // console.log(userInfo)
            storage
              .db("storage")
              .collection("users")
              .find({})
              .toArray()
              .then((users: any) => {
                const friends = users.filter(
                  (el: any) => el.login !== user.login
                )
                userInfo.friends = friends
                console.debug(userInfo, friends, users)
                res.send(userInfo)
              })
          }
        }
      )
    } else {
      res.send({})
    }
  }
)

module.exports = router
