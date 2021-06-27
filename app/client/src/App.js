import React, {useState, useEffect} from "react"
import "./App.scss"
import chat from "./components/Chat"
import Users from "./components/Users"
import LoginButton from "./components/Auth/LoginButton"

import {config} from "./config"

/**
 * It returns main app (markup)
 * @return {JSX} — messenger markup
 */
// http://localhost:${config.serverPort}/user
// eslint-disable-next-line require-jsdoc
function App() {
	const [user, setUser] = useState({})
	useEffect(() => {
		fetch(`${config.host}:${config.serverPort}/user`, {
			credentials: "include",
		})
			.then((response) => response.json())
			.then((response) => {
				// console.log("response")
				// console.log(response)
				if (response !== {}) {
					setUser(response)
				}
			})
	}, [])
	return (
		<div className="Messenger">
			{/* {console.log("Hello,", user.login)} */}
			{user.login === undefined ? (
				<LoginButton />
			) : (
				<>
					<Users />
					{chat(user.login, user.avatar_url)}
				</>
			)}
		</div>
	)
}

export default App
