import { FC } from "react"
import "../../css/obstacle.css"

interface CreateObstacleProp {
    move:number,
    source:string
}

const CreateObstacle:FC<CreateObstacleProp> = ({move,source}) => {
    return (
        <img
            className="Obstacle"
            src={source}
            style={{
                top: -1,
                left:move + "px"
            }}
        />
    )
}

export default CreateObstacle