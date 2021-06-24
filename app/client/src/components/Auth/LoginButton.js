import React from "react"

const config = require("../../config")
const LoginButton = () => {
	return (
		<a
			href={`https://kilogram-team-2.herokuapp.com:${config.serverPort}/login`}
		>
      Login
		</a>
	)
}

export default LoginButton
