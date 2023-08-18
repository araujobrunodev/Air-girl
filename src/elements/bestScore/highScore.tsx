import { useLoading } from "../../globalContext/loading"
import { useRecord } from "../../globalContext/record"
import { useEffect } from "react"
import "../../css/bestScore.css"

const BestScore = () => {
	const record = useRecord()
	const loading = useLoading()

	useEffect(() => {
		let LS = localStorage.getItem("bestScore")

		if (typeof record.value != "undefined" &&
			!loading.waiting.bestScore) {
			loading.setWaiting({
				obstacle: loading.waiting.obstacle,
				gameOver: loading.waiting.gameOver,
				bestScore: loading.waiting.bestScore = true,
				player: loading.waiting.player,
				floor: loading.waiting.floor,
				pause: loading.waiting.pause,
				score: loading.waiting.score,
				theme: loading.waiting.theme
			})
		}

		let setNewValue = setInterval(() => {
			if (LS != undefined)
				record.setValue(JSON.parse(LS))
		}, 1000)

		return () => clearInterval(setNewValue)
	}, [localStorage.getItem("bestScore")])

	return (<>
		<p
			id="bestScore">
			bestScore: {record.value}
		</p>
	</>)
}

export default BestScore