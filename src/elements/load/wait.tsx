import { useLoading } from "../../globalContext/loading"
import { useStart } from "../../globalContext/start"
import { useEffect, useState } from "react"
import LoadImages from "./loadImages"
import "../../css/wait.css"

const Wait = () => {
	let start = useStart()
	let loading = useLoading()
	let [message, setMeassage] = useState<string>("")
	
	useEffect(() => {
		if (!loading.waiting.images) {
			setMeassage("loading images...")
			console.log("waiting:",loading.waiting)
		} else {
			setMeassage("")
			return start.setCanStart(true)
		}

	},[loading.waiting])

	return (
		<div id="divWait">
			<LoadImages/>

			<h1 id="message">{ message }</h1>
		</div>
	)
}

export default Wait