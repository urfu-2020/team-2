import {Avatar} from "@material-ui/core"
import React from "react"
import "./ChatHeader.scss"
import CallRoundedIcon from "@material-ui/icons/CallRounded"
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded"
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded"
const ChatHeader = () => {
	return (
		<div className="ChatHeader">
			<div className="UserInfo">
				<Avatar />
				<div className="UserBody">
					<h3>User</h3>
					<p>Last seen at 20:47</p>
				</div>
			</div>
			<div className="HeaderIcons">
				<div className="HeaderIconWrapper">
					<CallRoundedIcon fontSize="medium" />
				</div>
				<div className="HeaderIconWrapper">
					<VideocamRoundedIcon fontSize="medium" />
				</div>
				<div className="HeaderIconWrapper">
					<MoreHorizRoundedIcon fontSize="medium" />
				</div>
			</div>
		</div>
	)
}

export default ChatHeader
