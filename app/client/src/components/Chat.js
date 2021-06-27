import React from "react"
import "./Chat.scss"
import chatBody from "./ChatBody"
import ChatHeader from "./ChatHeader"
import SendForm from "./SendForm"
const chat = (login, avatarUrl) => {
	return (
		<div className="chat">
			<ChatHeader />
			{chatBody(login, avatarUrl)}
			<SendForm />
		</div>
	)
}

export default chat
