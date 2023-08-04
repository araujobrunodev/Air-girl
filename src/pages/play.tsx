import Obstacle from "../elements/challenge/obstacle"
import { useStart } from "../globalContext/start"
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

    return (<>
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
            </>
        }
    </>)
}

export default Play