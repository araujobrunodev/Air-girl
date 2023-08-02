import { usePause } from "../../globalContext/pause"
import "../../css/pauseOrResume.css"

const Halt = () => {
	let pause = usePause()

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