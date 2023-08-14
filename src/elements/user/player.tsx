import { useObstacle } from "../../globalContext/childsObstacle"
import { useDeviceSize } from "../../globalContext/deviceSize"
import { useLoading } from "../../globalContext/loading"
import { usePress } from "../../globalContext/press"
import { usePause } from "../../globalContext/pause"
import { useState, useEffect } from "react"
import { useGameOver } from "../../globalContext/gameover"
import getDistance from "../distance"
import RenderPlayer from "./render"
import topAddition from "../topAdd"


const Player = () => {
	let pause = usePause()
	let press = usePress()
	let gameover = useGameOver()
	let loading = useLoading()
	let obstacle = useObstacle()
	let size = useDeviceSize().size.height
	let defaultPosition = topAddition({ to: "player", size: size })
	let [RP, setRP] = useState(<></>)
	let [repeat, setRepeat] = useState(0)
	let [active, setActive] = useState<string>("")
	let [position, setPosition] = useState(defaultPosition)
	let [spriteNumber, setSpriteNumber] = useState<number>(0)

	useEffect(() => {
		if (typeof press.event === "boolean" &&
			typeof defaultPosition === "number" &&
			typeof repeat === "number" &&
			typeof active === "string" &&
			typeof position === "number" &&
			typeof spriteNumber === "number" &&
			!loading.waiting.player
		) {
			loading.setWaiting({
				bestScore: loading.waiting.bestScore,
				floor: loading.waiting.floor,
				gameOver: loading.waiting.gameOver,
				obstacle: loading.waiting.obstacle,
				pause: loading.waiting.pause,
				player: true,
				score: loading.waiting.score,
				theme: loading.waiting.theme
			})
		}

		if (!gameover.active && spriteNumber == 0) setSpriteNumber(1)

		let jumpP = () => {
			if (pause.active) return press.setEvent(false);
			if (!press.event) return;

			let fase1 = setTimeout(() => {
				let defaultS: number = 45

				if (active == "") {
					setSpriteNumber(5)
					setRepeat(repeat += 1)
					setPosition(defaultPosition + (defaultS * repeat))
					
					if (repeat == 2) setActive(active = "1")

					return;
				}
				if (active == "1") {
					setSpriteNumber(6)
					setRepeat(repeat--)
					setPosition(defaultPosition + (defaultS / repeat))

					if (repeat == 1) setActive("2")

					return;
				}

				if (active == "2") {
					setRepeat(0)
					setActive("")
					setSpriteNumber(1)
					setPosition(defaultPosition)
					press.setEvent(false)
					return;
				}
			}, 70)

			return () => clearTimeout(fase1)
		}

		let runP = () => {
			if (press.event) return;
			if (pause.active) return;

			let fase = setTimeout(() => {
				if (spriteNumber === 0) return setSpriteNumber(1)
				if (spriteNumber === 1) return setSpriteNumber(2)
				if (spriteNumber === 2) return setSpriteNumber(1)
			}, 150)

			return () => clearTimeout(fase)
		}

		let fallenP = () => {
			if (spriteNumber == 0 ||
				spriteNumber == 1 ||
				spriteNumber == 2 ||
				spriteNumber == 5 ||
				spriteNumber == 6) {
				pause.setActive(true)
				return setSpriteNumber(3)
			}
		}

		let collision = () => {
			if (obstacle.item.length == 0) return

			let obstaclePosY = topAddition({ size: size, to: "obstacle" })

			obstacle.item.map((obst) => {
				let distance = getDistance({
					size: size,
					obstacle: obst,
					player: {
						x: 13,
						y: position
					}
				})

				if (distance.x > obst.move && distance.x < obst.size.width &&
					distance.y < obst.size.height && distance.y > obstaclePosY) {
					fallenP()
					gameover.setActive(true)
				}
			})
		}

		const hitbox = setInterval(() => collision(), 25)

		let renderP = () => {
			setRP(
				<RenderPlayer
					sprite={spriteNumber}
					posY={-position}
				/>
			)
		}

		let Main = setTimeout(() => {
			runP()
			jumpP()
			renderP()
		}, 30)

		return () => {
			let list = [Main, hitbox]

			list.map((it) => clearInterval(it))
		}
	}, [RP,spriteNumber,pause.active,gameover.active])

	return (<>
		{RP}
	</>)
}

export default Player