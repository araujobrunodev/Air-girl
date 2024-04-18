import { itemObstacle } from "../globalContext/childsObstacle"

interface Distance {
    playerX: number,
    obstacle:itemObstacle,
}

type distance = Distance

/** get distance between player and obstacle*/
const getDistance = (area:distance) => {
    let positionX = 0

    positionX = area.playerX - area.obstacle.move

    return positionX
}

export default getDistance