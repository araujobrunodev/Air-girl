import { usePermision } from "../../globalContext/permision"
import { useLoading } from "../../globalContext/loading"
import { useScore } from "../../globalContext/score"
import { useStart } from "../../globalContext/start"
import { usePause } from "../../globalContext/pause"
import { useEffect } from "react"
import "../../css/score.css"

const Score = () => {
    let score = useScore()
    let start = useStart()
    let pause = usePause()
    let loading = useLoading()
    let permision = usePermision()

    useEffect(() => {
        if (typeof score.pits == "number" &&
            !loading.waiting.score) {
            loading.setWaiting({
                ...loading.waiting,
                score: true,
            })
        }

        if (!start.canStart) return;
        if (pause.active) return;
        
        let time = setTimeout(() => {
            score.setPits(++score.pits)
            
            if (score.pits >= 6 && score.pits % 1 == 0) permision.setCreate(true)  
        }, 1000 * 1.5)

        return () => clearTimeout(time)
    }, [score.pits,pause.active])

    return (<>
        <p id="score" translate="no">Score: {
            score.pits
        }</p>
    </>)
}

export default Score