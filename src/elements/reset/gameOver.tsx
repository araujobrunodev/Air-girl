import { useObstacle } from "../../globalContext/childsObstacle"
import { useChildsTheme } from "../../globalContext/childsTheme"
import { usePermision } from "../../globalContext/permision"
import { useGameOver } from "../../globalContext/gameover"
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
	const defaultBorderSize = 3
	const defaultBackgroundColor = "#FF7A00"
	let obstacle = useObstacle()
	let gameover = useGameOver()
	let permision = usePermision()
	let childsTheme = useChildsTheme()
	let [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor)
	let [borderSize, setBorderSize] = useState(defaultBorderSize)

	useEffect(() => {
		if (gameover.active) {
			press.setEvent(false)
			pause.setActive(true)
		}
	}, [gameover.active, press.event, pause.active])

	return (
		<button
			id="button-gameover"
			className="gameover"
			onClick={() => {
				let LS = localStorage.getItem("bestScore")
				setBackgroundColor("purple")
				setBorderSize(7)
				
				setTimeout(() => {
					setBackgroundColor(defaultBackgroundColor)
					setBorderSize(defaultBorderSize)

					if (LS != undefined) {
						if (JSON.parse(LS) < score.pits)
							localStorage.setItem("bestScore", JSON.stringify(score.pits))
					} else
						localStorage.setItem("bestScore", JSON.stringify(score.pits))
					
					gameover.setActive(false)
					pause.setActive(false)
					permision.setCreate(false)
					start.setCanStart(false)
				}, 1000)
				childsTheme.setChilds([])
				obstacle.setItem([])
				score.setPits(0)
			}}
			style={{
				border: borderSize + "px solid black",
				boxShadow: "2px 4px 3px black",
				transition: "all 100ms",
				background: backgroundColor
			}}
			translate="no">
			Try again
		</button>
	)
}

export default GameOver