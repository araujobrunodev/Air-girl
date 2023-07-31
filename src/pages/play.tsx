import { useStart } from "../globalContext/start"
import Theme from "../elements/background/theme"
import Floor from "../elements/background/floor"
import Player from "../elements/user/player"
import TouchScreen from "../elements/touch"
import Wait from "../elements/load/wait"
import "../css/play.css"

const Play = () => {
    let start = useStart()

    return (<>
        {!start.canStart ?
            <Wait /> :
            <>
                <Theme />

                <Floor/>

                <Player />
                <TouchScreen />
            </>
        }
    </>)
}

export default Play