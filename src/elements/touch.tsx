import { usePress } from "../globalContext/press"
import "../css/touch.css"

const TouchScreen = () => {
	let press = usePress()

	return (<>
		<div
			id="touch"
			onClick={() => {press.setEvent(true)}}
		></div>
	</>)
}

export default TouchScreen