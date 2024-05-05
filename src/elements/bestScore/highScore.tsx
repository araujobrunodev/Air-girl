import { useRecord } from "../../globalContext/record"
import { useEffect } from "react"
import "../../css/bestScore.css"

const BestScore = () => {
	const record = useRecord()

	useEffect(() => {
		let LS = localStorage.getItem("bestScore")

		let setNewValue = setInterval(() => {
			if (LS != undefined)
				record.setValue(JSON.parse(LS))
		}, 1000)

		return () => clearInterval(setNewValue)
	}, [localStorage.getItem("bestScore")])

	return (
		<p
			id="bestScore"
			translate="no">
			bestScore: {record.value}
		</p>
	)
}

export default BestScore