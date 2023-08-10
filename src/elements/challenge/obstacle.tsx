import { itemObstacle, useObstacle } from "../../globalContext/childsObstacle"
import { usePermision } from "../../globalContext/permision"
import { useLoading } from "../../globalContext/loading"
import createIdentification from "../identification"
import { usePause } from "../../globalContext/pause"
import { useScore } from "../../globalContext/score"
import CreateObstacle from "./CreateObstacle"
import findObstacleImgs from "./obstacleImg"
import { useEffect, useState } from "react"
import obstacleSize from "./obstacleSize "
import "../../css/baseObstacle.css"

const Obstacle = () => {
	const time = 26
	const speedLimit = 45
	let pause = usePause()
	let score = useScore()
	let loading = useLoading()
	let obstacle = useObstacle()
	let permision = usePermision()
	let [Render, setRender] = useState<any>()
	let [speedMove, setSpeedMove] = useState<number>(16)
	const obstacleNames = [
		findObstacleImgs({ name: "traffic cone" }),
		// findObstacleImgs({ name: "car" }),
		// findObstacleImgs({ name: "rock" })
	]
	const obstaclesSize = [
		obstacleSize({ name: "traffic cone" }),
		obstacleSize({ name: "car" }),
		obstacleSize({ name: "rock" })
	]

	useEffect(() => {
		if (typeof time === "number" &&
			typeof permision.create === "boolean" &&
			typeof pause.active === "boolean" &&
			!loading.waiting.obstacle) {
			loading.setWaiting({
				bestScore: loading.waiting.bestScore,
				floor: loading.waiting.floor,
				gameOver: loading.waiting.gameOver,
				obstacle: true,
				pause: loading.waiting.pause,
				player: loading.waiting.player,
				score: loading.waiting.score,
				theme: loading.waiting.theme,
			})
		}

		if (score.pits % 10 == 0 && speedMove != speedLimit) setSpeedMove(++speedMove)

		const create = () => {
			if (!permision.create) return

			let randomObstacle = Math.round(Math.random() * (obstacleNames.length - 1))
			let identification = createIdentification()
			let fileName = obstacleNames[randomObstacle]
			let size = obstaclesSize[randomObstacle]

			obstacle.setItem([
				...obstacle.item,
				{
					sourcePath: fileName,
					key: identification,
					move: 500,
					size: { height: size.height, width: size.width },
					setMove: () => { },
					setSize: () => { }
				}
			] as itemObstacle[])

			permision.setCreate(false)
		}

		const move = () => {
			if (obstacle.item.length == 0) return

			obstacle.item.map((obj) => {
				obj.setMove(obj.move -= speedMove)

				if (obj.move <= -110) remove(obj.key)
			})
			console.log(speedMove)
		}

		const remove = (key: string) => {
			obstacle.setItem(obstacle.item.filter((comp) => {
				return comp.key != key
			}))
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
			if (pause.active) return
			create()
			move()
			render()
		}, time)

		return () => clearInterval(obstacleManager)
	}, [obstacle, pause.active])

	return (<>
		<div id="base-obstacle">
			{obstacle.item.length != 0 ?
				Render : undefined}
		</div>
	</>)
}

export default Obstacle