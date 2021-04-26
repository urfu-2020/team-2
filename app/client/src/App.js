import React, {useState, useEffect} from "react"
import "./App.scss"
import Chat from "./components/Chat"
import Users from "./components/Users"
import LoginButton from "./components/Auth/LoginButton"
import LogoutButton from "./components/Auth/LogutButton"


const config = require("./config")

/**
 * It returns main app (markup)
 * @return {JSX} — messenger markup
 */
function App() {
	const [user, setUser] = useState({})
	useEffect(() => {
		fetch(`http://localhost:${config.serverPort}/user`, {credentials: "include"})
			.then((response) => response.json())
			.then((response) => {
				console.log("response")
				console.log(response)
				setUser(response)
			})
	}, [])
	return (
		<div className="Messenger">
			{user.login === undefined ?
				<LoginButton/> :
				<>
					<LogoutButton/>
					<Users/>
					<Chat/>
				</>
			}
		</div>
	)
}

export default App
