import { Avatar } from "@material-ui/core"
import React from "react"

const Message = () => {
	return (
		<div className="Message">
			<Avatar style={{ alignSelf: "flex-end" }} />
			<div className="MessageBody">
				<p>
					Hi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quidem saepe suscipit dolores aspernatur, explicabo atque
					sed nisi repellendus numquam, ea alias sit quas libero
					tempore culpa quia id ab sunt!
				</p>
			</div>
		</div>
	)
}

export default Message
