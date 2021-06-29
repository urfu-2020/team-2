import {Avatar} from "@material-ui/core"
import React from "react"

const message = (login, avatarUrl) => {
	return (
		<div className="Message">
			<Avatar style={{alignSelf: "flex-end"}} src={avatarUrl} />
			<div className="MessageBody">
				<p>
          Hi, {login}! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem saepe suscipit dolores aspernatur, explicabo atque sed nisi
          repellendus numquam, ea alias sit quas libero tempore culpa quia id ab
          sunt!
				</p>
			</div>
		</div>
	)
}

export default message
