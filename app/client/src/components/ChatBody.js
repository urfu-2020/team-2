import React from "react"
import "./ChatBody.scss"
import message from "./Message"
import myMessage from "./MyMessage"
const chatBody = (login, myAvatar, friendAvatar) => {
	return (
		<div className="ChatBody">
			{myMessage(myAvatar)}
			{message(login, friendAvatar)}
			{message(login, friendAvatar)}
			{message(login, friendAvatar)}
			{myMessage(myAvatar)}
			{myMessage(myAvatar)}
			{message(login, friendAvatar)}
		</div>
	)
}

export default chatBody
