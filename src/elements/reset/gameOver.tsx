import { useLoading } from "../../globalContext/loading"
import { useGameOver } from "../../globalContext/gameover"
import { useEffect } from "react"

const GameOver = () => {
	let loading = useLoading()
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


	}, [loading.waiting.gameOver])

	return (<>
		<div id="div-gameover">
			<button id="button-gameover">
				Try again
			</button>
		</div>
	</>)
}

export default GameOver