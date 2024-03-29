import car from "../../images/car 1.png"
import rock from "../../images/rock.png"
import trafficCone from "../../images/traffic cone.png"

interface ObstacleColletionImgs {
	readonly name: "car" | "rock" | "traffic cone",
}

type findSome = string | undefined

const findObstacleImgs = ({ name }: ObstacleColletionImgs): findSome => {
	let result: findSome

	switch (name) {
		case "car":
			result = car
			break
		case "rock":
			result = rock
			break
		case "traffic cone":
			result = trafficCone
			break
		default:
			result = undefined
			break
	}

	return result
}

export default findObstacleImgs