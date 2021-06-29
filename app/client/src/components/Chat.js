import React from "react"
import "./Chat.scss"
import chatBody from "./ChatBody"
import chatHeader from "./ChatHeader"
import SendForm from "./SendForm"
const chat = (login, avatarUrl, friends) => {
	return (
		<div className="chat">
			{friends.length !== 0 ?
				chatHeader(friends[0].login, friends[0].avatar) :
				chatHeader("User", "https://thiscatdoesnotexist.com/")}
			{friends.length !== 0 ?
				chatBody(login, avatarUrl, friends[0].avatar) :
				chatBody(login, avatarUrl, "https://thiscatdoesnotexist.com/")}
			<SendForm />
		</div>
	)
}

export default chat
