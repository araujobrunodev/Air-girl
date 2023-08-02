import { usePause } from "../../globalContext/pause"
import { useLoading } from "../../globalContext/loading"
import { useEffect } from "react"
import "../../css/pauseOrResume.css"

const Halt = () => {
	let pause = usePause()
	let loading = useLoading()

	useEffect(() => {
		if (typeof pause.active === "boolean" &&
			!loading.waiting.pause) {
				loading.setWaiting({
					bestScore:loading.waiting.bestScore,
					floor:loading.waiting.floor,
					gameOver:loading.waiting.gameOver,
					obstcle:loading.waiting.obstcle,
					pause:true,
					player:loading.waiting.player,
					score:loading.waiting.score,
					theme:loading.waiting.theme
			})
			}
	},[loading])

	return (<>
		{!pause.active ?
			<button
				onClick={() => { return pause.setActive(true) }}
				id="buttonResume"
			>
				<img src="../../../unpause.svg" alt="unpause" />
			</button>
			:
			<p
				id="pause"
				onClick={() => {return pause.setActive(false)}}
			>Pause</p>
		}
	</>)
}

export default Halt