import Theme from "../background/theme"
import Floor from "../background/floor"
import Player from "../user/player"
import Score from "../time/score"

const callElements = () => {
    Player()
    Theme()
    Floor()
    Score()
}

export default callElements