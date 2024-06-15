import { useObstacle } from "../../globalContext/childsObstacle"
import { useDeviceSize } from "../../globalContext/deviceSize"
import { useGameOver } from "../../globalContext/gameover"
import { usePress } from "../../globalContext/press"
import { usePause } from "../../globalContext/pause"
import { useScore } from "../../globalContext/score"
import { useState, useEffect } from "react"
import getDistance from "../distance"
import RenderPlayer from "./render"
import topAddition from "../topAdd"

const Player = () => {
	const defaultS: number = 25
	let pause = usePause()
	let press = usePress()
	let score = useScore()
	let gameover = useGameOver()
	let obstacle = useObstacle()
	let size = useDeviceSize().size
	let defaultPosition = topAddition({ to: "player", size: size })
	let [repeat, setRepeat] = useState(0)
	let [active, setActive] = useState<string>("")
	let [position, setPosition] = useState(defaultPosition)
	let [spriteNumber, setSpriteNumber] = useState<number>(0)
	let [isJumping,setIsJumping] = useState<boolean>(false)

	let jumpP = () => {
		if (!press.event) return;

		setIsJumping(true)

		let fase1 = setTimeout(() => {
			if (active == "") {
				setSpriteNumber(5)
				setRepeat(++repeat)
				setPosition(defaultPosition + (defaultS * repeat * 2))
				if (repeat == 2) setActive(active = "1")
			}
			if (active == "1") {
				setSpriteNumber(6)
				setRepeat(--repeat)
				setPosition(defaultPosition + (defaultS / repeat))
				if (repeat == 1) setActive("2")
			}
			if (active == "2") {
				setRepeat(0)
				setActive("")
				setSpriteNumber(1)
				setPosition(defaultPosition)
				press.setEvent(false)
				setIsJumping(false)
			}
		}, 60)

		return () => clearTimeout(fase1)
	}

	let runP = () => {
		if (press.event) return;

		let fase = setTimeout(() => {
			if (spriteNumber === 0 || spriteNumber == 2) return setSpriteNumber(1)
			if (spriteNumber === 1) return setSpriteNumber(2)
		}, 45)

		return () => clearTimeout(fase)
	}

	let fallenP = () => {
		if (spriteNumber == 6) return;
		pause.setActive(true)
		setSpriteNumber(3)
	}

	let collision = () => {
		if (obstacle.item.length == 0) return

		obstacle.item.map((obst) => {
			let distance = getDistance({
				obstacle: obst,
				playerX: 13
			})

			if (distance >= -27 &&
				distance <= 30&& 
				!isJumping) {
				fallenP()
				gameover.setActive(true)
			}
		})
	}

	useEffect(() => {
		if (score.pits == 0) setSpriteNumber(0)

		let Main = setTimeout(() => {
			if (pause.active) return;
			runP()
			jumpP()
		}, 50)

		return () => clearTimeout(Main)
	}, [spriteNumber, pause.active, gameover.active])

	useEffect(() => {
		collision()
	})

	return (
		<RenderPlayer 
			sprite={spriteNumber}
			posY={-position}
		/>
	)
}

export default Player