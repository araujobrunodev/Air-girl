import Obstacle from "../challenge/obstacle"
import GameOver from "../reset/gameOver"
import Theme from "../background/theme"
import Floor from "../background/floor"
import Player from "../user/player"
import Score from "../time/score"
import Halt from "../pause/halt"

const callElements = () => {
    GameOver()
    Player()
    Theme()
    Obstacle()
    Floor()
    Halt()
    Score()
}

export default callElements