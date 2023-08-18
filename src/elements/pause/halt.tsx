import { useGameOver } from "../../globalContext/gameover"
import { useLoading } from "../../globalContext/loading"
import { usePause } from "../../globalContext/pause"
import { useEffect } from "react"
import "../../css/pauseOrResume.css"

const Halt = () => {
	let pause = usePause()
	let loading = useLoading()
	let gameover = useGameOver()

	useEffect(() => {
		if (typeof pause.active === "boolean" &&
			!loading.waiting.pause) {
				loading.setWaiting({
					bestScore:loading.waiting.bestScore,
					floor:loading.waiting.floor,
					gameOver:loading.waiting.gameOver,
					obstacle:loading.waiting.obstacle,
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
			!gameover.active ?
			<p
				id="pause"
				onClick={() => {return pause.setActive(false)}}
			>
				Pause
			</p>
			:
			undefined
		}
	</>)
}

export default Halt