import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./app/store"
import { Provider } from "react-redux"

const express = require("express")
const app = express()

app.get("/", (req, res) => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
		document.getElementById("root")
	)
})

app.all("*", (req, res) => {
	res.sendStatus(404)
})

app.listen(process.env.PORT || 80)
