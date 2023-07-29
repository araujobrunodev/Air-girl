import { usePress } from "../globalContext/press"

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