import { itemObstacle, useObstacle } from "../../globalContext/childsObstacle"
import { useObstacleGlobal } from "../../globalContext/obstacleGlobal"
import { useDeviceSize } from "../../globalContext/deviceSize"
import { usePermision } from "../../globalContext/permision"
import findObstacleProperty from "./obstacleProperty"
import createIdentification from "../identification"
import { usePause } from "../../globalContext/pause"
import { useScore } from "../../globalContext/score"
import CreateObstacle from "./CreateObstacle"
import { useEffect, useState } from "react"
import "../../css/baseObstacle.css"

const Obstacle = () => {
	let obstacleGlobal = useObstacleGlobal()
	let pause = usePause()
	let score = useScore()
	let obstacle = useObstacle()
	let device = useDeviceSize()
	let permision = usePermision()
	let [Render, setRender] = useState<any>()
	const obstacleProperty = [
		findObstacleProperty({name: "traffic cone"}),
		findObstacleProperty({name: "rock"}),
		findObstacleProperty({name: "car"})
	]

	const create = () => {
		if (!permision.create) return
	
		let index = obstacleProperty.length - obstacleGlobal.createLimit
		let randomObstacle = Math.round(Math.random() * index)
		let identification = createIdentification()
		let property = obstacleProperty[randomObstacle]
	
		obstacle.setItem([
			...obstacle.item,
			{
				sourcePath: property.name,
				key: identification,
				move: device.size.width + property.width,
				speed: obstacleGlobal.speedMove,
				size: { height: property.height, width: property.width },
				setMove: () => { },
				setSize: () => { }
			},
		] as itemObstacle[])
	
		permision.setCreate(false)
	}

	const remove = (key: string) => {
		obstacle.setItem(obstacle.item.filter((comp) => {
			return comp.key != key
		}))
	}

	const move = () => {
		if (obstacle.item.length == 0) return

		obstacle.item.map((obj) => {
			obj.setMove(obj.move -= obj.speed)

			if (obj.move <= -110) remove(obj.key)
		})
	}

	const breakLimit = () => {
		switch (score.pits) {
			case 25: //rock
				if (obstacleGlobal.createLimit != 2) obstacleGlobal.setCreateLimit(--obstacleGlobal.createLimit)
				break

			case 70: //car
				if (obstacleGlobal.createLimit != 1) obstacleGlobal.setCreateLimit(--obstacleGlobal.createLimit)
				break
		}
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

	useEffect(() => {
		if (score.pits % 10 == 0 && obstacleGlobal.speedMove != obstacleGlobal.speedLimit) obstacleGlobal.setSpeedMove(obstacleGlobal.speedMove += 0.1)
		if (pause.active) return

		const obstacleManager = setInterval(() => {
			create()
			move()
			render()
			breakLimit()
		}, obstacleGlobal.time)

		return () => clearInterval(obstacleManager)
	}, [obstacle, pause.active,obstacleGlobal.createLimit,obstacleGlobal.speedLimit])

	return (
		<div id="base-obstacle">
			{
				obstacle.item.length != 0 && Render
			}
		</div>
	)
}

export default Obstacle