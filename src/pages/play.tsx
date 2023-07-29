import Theme from "../elements/background/theme"
import Player from "../elements/user/player"
import TouchScreen from "../elements/touch"
import "../css/play.css"

const Play = () => {
    
    return (<>
        <Theme/>

        <div id="floor"></div>

        <Player/>
        <TouchScreen/>
    </>)
}

export default Play