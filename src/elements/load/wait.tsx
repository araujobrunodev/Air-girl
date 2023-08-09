import { useLoading } from "../../globalContext/loading"
import { useStart } from "../../globalContext/start"
import { useEffect, useState } from "react"
import callElements from "./callElements"
import allSprite from "../user/sprite"
import "../../css/wait.css"

const Wait = () => {
	let start = useStart()
	let loading = useLoading()
	let [message, setMeassage] = useState<string>("")

	callElements()

	useEffect(() => {
		if (!loading.waiting.player) {
			setMeassage("loading player...")
			return
		} else if (!loading.waiting.theme){
			setMeassage("loading theme...")
			return
		} else if (!loading.waiting.floor) {
			setMeassage("loading floor...")
			return
		} else if (!loading.waiting.score) {
			setMeassage("loading score...")
			return
		} else if (!loading.waiting.pause) {
			setMeassage("loading pause...")
			return
		} else if (!loading.waiting.obstacle) {
			setMeassage("loading obstacle...")
			return
		} else {
			setMeassage("")
			return start.setCanStart(true)
		}

	},[loading.waiting])

	return (<>
		<div
			id="divWait"
		>
			<img src={allSprite[0].Path} id="iconWait"></img>

			<h1 id="message">{ message }</h1>
		</div>
	</>)
}

export default Wait