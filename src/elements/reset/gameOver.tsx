import { useObstacle } from "../../globalContext/childsObstacle"
import { useChildsTheme } from "../../globalContext/childsTheme"
import { usePermision } from "../../globalContext/permision"
import { useGameOver } from "../../globalContext/gameover"
import { useLoading } from "../../globalContext/loading"
import { useScore } from "../../globalContext/score"
import { useStart } from "../../globalContext/start"
import { usePress } from "../../globalContext/press"
import { usePause } from "../../globalContext/pause"
import { useEffect, useState } from "react"
import "../../css/gameOver.css"

const GameOver = () => {
	let score = useScore()
	let start = useStart()
	let press = usePress()
	let pause = usePause()
	let loading = useLoading()
	const defaultBorderSize = 3
	const defaultBackgroundColor = "#FF7A00"
	let obstacle = useObstacle()
	let gameover = useGameOver()
	let permision = usePermision()
	let childsTheme = useChildsTheme()
	let [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor)
	let [borderSize, setBorderSize] = useState(defaultBorderSize)

	useEffect(() => {
		if (!loading.waiting.gameOver &&
			typeof gameover.active === "boolean") {

			loading.setWaiting({
				...loading.waiting,
				gameOver: true
			})
		}

		if (gameover.active) {
			press.setEvent(false)
			pause.setActive(true)
		}
	}, [loading.waiting, gameover.active, press.event, pause.active])

	return (<>
		<button
			id="button-gameover"
			className="gameover"
			onClick={() => {
				let LS = localStorage.getItem("bestScore")
				setBackgroundColor("purple")
				setBorderSize(7)

				setTimeout(() => {
					loading.setWaiting({
						...loading.waiting,
						gameOver: false
					})

					permision.setCreate(false)
					pause.setActive(false)
					score.setPits(0)

					if (LS != undefined) {
						if (JSON.parse(LS) < score.pits)
							localStorage.setItem("bestScore", JSON.stringify(score.pits))
					} else
						localStorage.setItem("bestScore", JSON.stringify(score.pits))

					setBackgroundColor(defaultBackgroundColor)
					setBorderSize(defaultBorderSize)

					obstacle.setItem([])
					childsTheme.setChilds([])
					gameover.setActive(false)
					start.setCanStart(false)
				}, 1000)
			}}
			style={{
				border: borderSize + "px solid black",
				boxShadow: "2px 4px 3px black",
				transition: "all 100ms",
				background: backgroundColor
			}}>
			Try again
		</button>
	</>)
}

export default GameOver