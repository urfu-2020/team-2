import React from "react"
import "./Users.scss"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import AddIcon from "@material-ui/icons/Add"
import userItem from "./UserItem"
import {config} from "../config"
const Users = () => {
	const hide = () => {
		document.getElementsByTagName("h2")[0].classList.add("hidden")
		document.querySelector(".IconWrapper").classList.add("hidden")
		const cons = document.getElementsByClassName("Con__info")
		// console.log(cons)
		for (const con of cons) con.classList.add("hidden")
		document.querySelector(".users__container").style.flex = "0.07"
		document.querySelector(".chat").style.flex = "0.93 1"
		document.querySelector(".Category").style.justifyContent = "center"
	}

	const show = () => {
		document.getElementsByTagName("h2")[0].classList.remove("hidden")
		document.querySelector(".IconWrapper").classList.remove("hidden")
		const cons = document.getElementsByClassName("Con__info")
		for (const con of cons) con.classList.remove("hidden")
		document.querySelector(".users__container").style.flex = "0.25"
		document.querySelector(".chat").style.flex = "0.75 1"
		document.querySelector(".Category").style.justifyContent = "space-between"
	}

	const usersInfo = [
		["Витя Дубровский", "Работаю до завтра", "8 min ago"],
		["Патриарх Кефир", "Sent a photo", "03:56 PM"],
		["Феечка Блум", "Я узнала, кто мои настоящие родители", "05:14 PM"],
		["Стражница Вилл", "Дай сюда мой тост!", "Yesterday"],
		[
			"Banana Joe",
			"первому клоуну класса самое место на первой странице",
			"Yesterday",
		],
		["Локи", "Мяу", "Wed"],
		["Цири", "Мы хотим кушац", "Wed"],
	]
	return (
		<div className="users__container">
			<div className="header__icons">
				<a className="red__icon" href={`${config.host}:9000/logout`}></a>
				<div onClick={() => hide()} className="yellow__icon" />
				<div onClick={() => show()} className="green__icon" />
			</div>
			<div className="Category">
				<h2>Recent</h2>
				<div className="Cate__Icons">
					<div className="IconWrapper">
						<SearchRoundedIcon />
					</div>
					<div className="IconWrapper">
						<AddIcon />
					</div>
				</div>
			</div>
			{usersInfo.map((el) => userItem(el[0], el[1], el[2]))}
		</div>
	)
}

export default Users
