import { useGameOver } from "../../globalContext/gameover"
import { usePause } from "../../globalContext/pause"
const unpause = "/unpause.svg"
import "../../css/pauseOrResume.css"

const Halt = () => {
	let pause = usePause()
	let gameover = useGameOver()

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