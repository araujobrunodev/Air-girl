import { itemObstacle } from "../globalContext/childsObstacle"
import topAddition from "./topAdd"

interface Distance {
    player:{
        x:number,
        y:number
    },
    obstacle:itemObstacle,
    size:number
}

interface Position {
    x:number,
    y:number
}

type distance = Distance

/** get distance between player and obstacle*/
const getDistance = (area:distance) => {
    let defaultPositionY = topAddition({size:area.size,to:"player"})
    let positionDistance:Position = {
        x:0,
        y:0
    }

    positionDistance.x = area.player.x - area.obstacle.move
    positionDistance.y = defaultPositionY - area.player.y

    return positionDistance
}

export default getDistance