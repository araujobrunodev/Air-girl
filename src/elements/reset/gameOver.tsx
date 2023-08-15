import { useObstacle } from "../../globalContext/childsObstacle"
import { useChildsTheme } from "../../globalContext/childsTheme"
import { usePermision } from "../../globalContext/permision"
import { useGameOver } from "../../globalContext/gameover"
import { useLoading } from "../../globalContext/loading"
import { useScore } from "../../globalContext/score"
import { useStart } from "../../globalContext/start"
import { usePress } from "../../globalContext/press"
import { usePause } from "../../globalContext/pause"
import { useEffect } from "react"
import "../../css/gameOver.css"

const GameOver = () => {
	let score = useScore()
	let start = useStart()
	let press = usePress()
	let pause = usePause()
	let loading = useLoading()
	let obstacle = useObstacle()
	let gameover = useGameOver()
	let permision = usePermision()
	let childsTheme = useChildsTheme()

	useEffect(() => {
		if (!loading.waiting.gameOver &&
			typeof gameover.active === "boolean") {

			loading.setWaiting({
				bestScore: loading.waiting.bestScore,
				floor: loading.waiting.floor,
				gameOver: true,
				obstacle: loading.waiting.obstacle,
				pause: loading.waiting.pause,
				player: loading.waiting.player,
				score: loading.waiting.score,
				theme: loading.waiting.theme
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
			onClick={() => {
				let LS = localStorage.getItem("bestScore")

				loading.setWaiting({
					bestScore: false,
					gameOver: false,
					obstacle: false,
					player: false,
					floor: false,
					pause: false,
					score: false,
					theme: loading.waiting.theme
				})

				if (LS != undefined) {
					if (JSON.parse(LS) < score.pits)
						localStorage.setItem("bestScore", JSON.stringify(score.pits))
				} else
					localStorage.setItem("bestScore", JSON.stringify(score.pits))

				score.setPits(0)
				obstacle.setItem([])
				childsTheme.setChilds([])
				permision.setCreate(false)
				gameover.setActive(false)
				pause.setActive(false)
				start.setCanStart(false)
			}}>
			Try again
		</button>
	</>)
}

export default GameOver