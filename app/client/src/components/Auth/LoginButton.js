import React from "react"

const config = require("../../config")
const LoginButton = () => {
	return (
		<a href={`http://localhost:${config.serverPort}/login`}>Login</a>
	)
}

export default LoginButton
