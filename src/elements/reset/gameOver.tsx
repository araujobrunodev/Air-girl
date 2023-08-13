import { useObstacle } from "../../globalContext/childsObstacle"
import { useGameOver } from "../../globalContext/gameover"
import { useLoading } from "../../globalContext/loading"
import { useScore } from "../../globalContext/score"
import { useEffect } from "react"
import "../../css/gameOver.css"

const GameOver = () => {
	let score = useScore()
	let loading = useLoading()
	let obstacle = useObstacle()
	let gameover = useGameOver()

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
	}, [loading.waiting])

	return (<>
		<button
			id="button-gameover"
			onClick={() => {
				score.setPits(0)

				loading.setWaiting({
					bestScore: false,
					floor: false,
					gameOver: false,
					obstacle: false,
					pause: false,
					player: false,
					score: false,
					theme: false
				})

				obstacle.setItem([])
			}}>
			Try again
		</button>
	</>)
}

export default GameOver