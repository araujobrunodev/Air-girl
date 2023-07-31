import { useEffect, useState } from "react"
import { useStart } from "../../globalContext/start"
import { useLoading } from "../../globalContext/loading"

const Wait = () => {
	let start = useStart()
	let loading = useLoading()
	let [approves,setApproves] = useState<string>("")
	let [message, setMeassage] = useState<string>("")

	useEffect(() => {
		if (!loading.waiting.player) {
			setMeassage("loading for player")
			setApproves("loading")
			return
		} else if (!loading.waiting.theme){
			setMeassage("loading for theme")
			setApproves("loading")
			return
		} else if (!loading.waiting.floor) {
			setMeassage("loading for floor")
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
			<div id="iconWait"></div>

			<h1 id="message">{ message }</h1>
		</div>
	</>)
}

export default Wait