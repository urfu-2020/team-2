import React from "react"

const config = require("../../config")
const LogoutButton = () => {
	return (
		<a href={`http://localhost:${config.serverPort}/logout`}>Logout</a>
	)
}

export default LogoutButton
