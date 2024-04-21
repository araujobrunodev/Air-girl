import { useGameOver } from "../../globalContext/gameover"
import { useLoading } from "../../globalContext/loading"
import { usePause } from "../../globalContext/pause"
import { useEffect } from "react"
import unpause from "../../images/unpause.svg"
import "../../css/pauseOrResume.css"

const Halt = () => {
	let pause = usePause()
	let loading = useLoading()
	let gameover = useGameOver()

	useEffect(() => {
		if (typeof pause.active === "boolean" &&
			!loading.waiting.pause) {
				loading.setWaiting({
					...loading.waiting,
					pause:true,
			})
			}
	},[loading])

	return (<>
		{!pause.active ?
			<button
				onClick={() => { return pause.setActive(true) }}
				id="buttonResume"
			>
				<img src={unpause} alt="unpause" />
			</button>
			: 
			!gameover.active ?
			<p
				id="pause"
				onClick={() => {return pause.setActive(false)}}
				translate="no"
			>
				Pause
			</p>
			:
			undefined
		}
	</>)
}

export default Halt