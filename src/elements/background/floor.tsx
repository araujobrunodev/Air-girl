import { useEffect } from "react"
import { useLoading } from "../../globalContext/loading"

const Floor = () => {
    let loading = useLoading()

    useEffect(() => {
        if (!loading.waiting.floor) {
            loading.setWaiting({
                bestScore:loading.waiting.bestScore,
                floor:true,
                gameOver:loading.waiting.gameOver,
                obstcle:loading.waiting.obstcle,
                pause:loading.waiting.pause,
                player:loading.waiting.player,
                score:loading.waiting.score,
                theme:loading.waiting.theme
            })
        } 
    },[loading])
    return (<>
        <div id="floor"></div>
    </>)
}

export default Floor