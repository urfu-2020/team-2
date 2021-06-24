import React from "react"

const config = require("../../config")
const LogoutButton = () => {
	return (
		<a
			href={`https://kilogram-team-2.herokuapp.com:${config.serverPort}/logout`}
		>
      Logout
		</a>
	)
}

export default LogoutButton
