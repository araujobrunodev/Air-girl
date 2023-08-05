import { itemObstacle, useObstacle } from "../../globalContext/childsObstacle"
import { usePermision } from "../../globalContext/permision"
import createIdentification from "../identification"
import CreateObstacle from "./CreateObstacle"
import findObstacleImgs from "./obstacleImg"
import { useEffect, useState } from "react"
import "../../css/baseObstacle.css"

const Obstacle = () => {
	const time = 100
	let obstacle = useObstacle()
	let permision = usePermision()
	let [Render, setRender] = useState<any>()
	const obstacleNames = [
		findObstacleImgs({ name: "traffic cone" }),
		findObstacleImgs({ name: "car" }),
		findObstacleImgs({ name: "rock" })
	]

	useEffect(() => {
		console.log("obstacles:", obstacle.item)
		const create = () => {
			if (!permision.create) return

			let randomObstacle = Math.round(Math.random() * (obstacleNames.length - 1))
			let identification = createIdentification()
			let fileName = obstacleNames[randomObstacle]

			obstacle.setItem([
				...obstacle.item,
				{
					sourcePath: fileName,
					key: identification,
					move: 100,
					setMove:() => {}
				}
			] as itemObstacle[])

			permision.setCreate(false)
		}

		const move = () => {
			if (obstacle.item.length == 0) return

			obstacle.item.map((obj) => {
				obj.setMove(--obj.move)
			})
		}

		const render = () => {
			setRender(obstacle.item.map((it) => {
				return <CreateObstacle
					move={it.move}
					source={it.sourcePath}
					key={it.key}
				/>
			}))
		}

		const obstacleManager = setInterval(() => {
			create()
			move()
			render()
		}, time)

		return () => clearInterval(obstacleManager)
	}, [obstacle])

	return (<>
		<div id="base-obstacle">
			{obstacle.item.length != 0 ?
				Render : undefined}
		</div>
	</>)
}

export default Obstacle