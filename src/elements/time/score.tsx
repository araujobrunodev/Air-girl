import { useScore } from "../../globalContext/score"
import { useStart } from "../../globalContext/start"
import { useLoading } from "../../globalContext/loading"
import { useEffect } from "react"

const Score = () => {
    let score = useScore()
    let start = useStart()
    let loading = useLoading()

    useEffect(() => {
        if (typeof score.pits == "number" &&
            !loading.waiting.score) {
            loading.setWaiting({
                bestScore: loading.waiting.bestScore,
                floor: loading.waiting.floor,
                gameOver: loading.waiting.gameOver,
                obstcle: loading.waiting.obstcle,
                pause: loading.waiting.pause,
                player: loading.waiting.player,
                score: true,
                theme: loading.waiting.theme
            })
        }

        if (!start.canStart) return;

        let time = setTimeout(() => {
            score.setPits(score.pits++)
        }, 1000)

        return () => clearTimeout(time)
    }, [score.pits])

    return (<>
        <p id="score">{
            score.pits
        }</p>
    </>)
}

export default Score