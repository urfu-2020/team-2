import {Avatar} from "@material-ui/core"
import React from "react"
import "./UsersList.scss"
const UserItem = (name, lastMsg, timeMsg) => {
	return (
		<div className="UserCard">
			<Avatar />
			<div className="Con__info">
				<h3>{name}</h3>
				<div className="Con__body">
					<p>{lastMsg}</p>
					<p>{timeMsg}</p>
				</div>
			</div>
		</div>
	)
}

export default UserItem
