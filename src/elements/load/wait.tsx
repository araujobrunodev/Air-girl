import { useEffect, useState } from "react"
import { useStart } from "../../globalContext/start"
import { useLoading } from "../../globalContext/loading"

const Wait = () => {
	let start = useStart
	let loading = useLoading()
	let [approves,setApproves] = useState<number>(0)
	let [message, setMeassage] = useState<string>("")

	useEffect(() => {

		if (!loading.waiting.player) {
			setMeassage("loading for player")
			setApproves(approves += 1)
		}
		if (!loading.waiting.theme){
			setMeassage("loading for theme")
			setApproves(approves += 1)
		}

		if (!loading.waiting.floor) {
			setMeassage("loading for floor")
			setApproves(approves += 1)
		}

		if (approves == 3) return start.setCanStart(true)
	})

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