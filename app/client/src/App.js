import React from "react"
import "./App.scss"
import Chat from "./components/Chat"
import Users from "./components/Users"
import LoginButton from "./components/LoginButton"

/**
 * It returns main app (markup)
 * @return {JSX} — messenger markup
 */
function App() {
	return (
		<div className="Messenger">
			<LoginButton />
			<Users />
			<Chat />
		</div>
	)
}

export default App
