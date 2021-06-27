import React from "react"
import "./ChatBody.scss"
import message from "./Message"
import myMessage from "./MyMessage"
const chatBody = (login, avatarUrl) => {
	return (
		<div className="ChatBody">
			{myMessage(avatarUrl)}
			{message(login)}
			{message(login)}
			{message(login)}
			{myMessage(avatarUrl)}
			{myMessage(avatarUrl)}
			{message(login)}
		</div>
	)
}

export default chatBody
