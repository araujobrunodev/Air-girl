import { usePermision } from "../../globalContext/permision"
import { useScore } from "../../globalContext/score"
import { useStart } from "../../globalContext/start"
import { usePause } from "../../globalContext/pause"
import { useEffect } from "react"
import "../../css/score.css"

const Score = () => {
    let score = useScore()
    let start = useStart()
    let pause = usePause()
    let permision = usePermision()

    useEffect(() => {
        if (!start.canStart) return;
        if (pause.active) return;
        
        let time = setTimeout(() => {
            score.setPits(++score.pits)
            
            if (score.pits >= 6 && score.pits % 1 == 0) permision.setCreate(true)  
        }, 1000 * 1.5)

        return () => clearTimeout(time)
    }, [score.pits, pause.active])

    return (
        <p id="score" translate="no">Score: {
            score.pits
        }</p>
    )
}

export default Score