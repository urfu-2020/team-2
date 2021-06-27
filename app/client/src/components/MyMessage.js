import {Avatar} from "@material-ui/core"
import React from "react"

const myMessage = (avatarUrl) => {
	return (
		<div className="Message my">
			<Avatar style={{alignSelf: "flex-end"}} src={avatarUrl} />
			<div className="MessageBody my_b">
				<p>
          OMG... Officiis, corrupti repellat. Voluptatem dicta iste aliquid
          aspernatur?
				</p>
			</div>
		</div>
	)
}

export default myMessage
