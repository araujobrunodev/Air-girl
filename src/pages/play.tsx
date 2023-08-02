import { useStart } from "../globalContext/start"
import Theme from "../elements/background/theme"
import Floor from "../elements/background/floor"
import Player from "../elements/user/player"
import TouchScreen from "../elements/touch"
import Score from "../elements/time/score"
import Wait from "../elements/load/wait"
import "../css/play.css"
import Halt from "../elements/pause/halt"

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

                <Player />
            </>
        }
    </>)
}

export default Play