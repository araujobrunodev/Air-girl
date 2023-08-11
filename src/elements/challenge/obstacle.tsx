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
		findObstacleImgs({ name: "rock" }),
		findObstacleImgs({ name: "car" })
	]
	const obstaclesSize = [
		obstacleSize({ name: "traffic cone" }),
		obstacleSize({ name: "rock" }),
		obstacleSize({ name: "car" })
	]
	let [obstacleLimit,setObstacleLimit] = useState(obstacleNames.length)

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

			let index = obstacleNames.length - obstacleLimit
			let randomObstacle = Math.round(Math.random() * index)
			let identification = createIdentification()
			let name = obstacleNames[randomObstacle]
			let size = obstaclesSize[randomObstacle]

			obstacle.setItem([
				...obstacle.item,
				{
					sourcePath: name,
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
		const breakLimit = () => {
			switch (score.pits) {
				case 50:
					if (obstacleLimit != 2) setObstacleLimit(--obstacleLimit)
					break
				case 120:
					if (obstacleLimit != 1) setObstacleLimit(--obstacleLimit)
					break
			}
		}

		const obstacleManager = setInterval(() => {
			if (pause.active) return
			create()
			move()
			render()
			breakLimit()
		}, time)

		return () => clearInterval(obstacleManager)
	}, [obstacle, pause.active,obstacleLimit,speedLimit])

	return (<>
		<div id="base-obstacle">
			{obstacle.item.length != 0 ?
				Render : undefined}
		</div>
	</>)
}

export default Obstacle