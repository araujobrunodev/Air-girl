interface ObstacleColletionImgs {
	readonly name: "car" | "rock" | "traffic cone",
}

type findSome = string | undefined

const findObstacleImgs = ({ name }: ObstacleColletionImgs): findSome => {
	let result: findSome
	let basePath = "../../../"

	switch (name) {
		case "car":
			result = basePath + "car 1.png"
			break
		case "rock":
			result = basePath + "rock.png"
			break
		case "traffic cone":
			result = basePath + "traffic cone.png"
			break
		default:
			result = undefined
			break
	}

	return result
}

export default findObstacleImgs