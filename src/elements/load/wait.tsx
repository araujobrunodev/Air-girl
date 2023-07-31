import { useLoading } from "../../globalContext/loading"
import { useStart } from "../../globalContext/start"
import { useEffect, useState } from "react"
import allSprite from "../user/sprite"
import "../../css/wait.css"

const Wait = () => {
	let start = useStart()
	let loading = useLoading()
	let [approves,setApproves] = useState<string>("")
	let [message, setMeassage] = useState<string>("")

	useEffect(() => {
		if (!loading.waiting.player) {
			setMeassage("loading player...")
			setApproves("loading")
			return
		} else if (!loading.waiting.theme){
			setMeassage("loading theme...")
			setApproves("loading")
			return
		} else if (!loading.waiting.floor) {
			setMeassage("loading floor...")
			setApproves("loading")
			return
		} else {
			setApproves("load")
			setMeassage("")
		}

		if (approves == "load") return start.setCanStart(true)
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