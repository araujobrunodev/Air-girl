import Theme from "../elements/background/theme"
import Player from "../elements/user/player"
import TouchScreen from "../elements/touch"
import { useStart } from "../globalContext/start"
import Wait from "../elements/load/wait"
import "../css/play.css"

const Play = () => {
    let start = useStart

    return (<>
        {!start.canStart ?
            <Wait /> :
            <>
                <Theme />

                <div id="floor"></div>

                <Player />
                <TouchScreen />
            </>
        }
    </>)
}

export default Play