import { useGameOver } from "../globalContext/gameover"
import BestScore from "../elements/bestScore/highScore"
import Obstacle from "../elements/challenge/obstacle"
import { useStart } from "../globalContext/start"
import GameOver from "../elements/reset/gameOver"
import Theme from "../elements/background/theme"
import Floor from "../elements/background/floor"
import Player from "../elements/user/player"
import TouchScreen from "../elements/touch"
import Score from "../elements/time/score"
import Halt from "../elements/pause/halt"
import Wait from "../elements/load/wait"
import "../css/play.css"

const Play = () => {
    let start = useStart()
    let gameover = useGameOver()

    return (<>
        <BestScore/>
        {!start.canStart ?
            <Wait /> :
            <>
                <Score/>
                <Halt/>
                
                <Theme />
                <TouchScreen />
                <Floor/>
                <Obstacle/>

                <Player />

                { gameover.active ?
                    <GameOver/> : undefined
                }
            </>
        }
    </>)
}

export default Play