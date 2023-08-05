import { useDeviceSize } from "../../globalContext/deviceSize"
import topAddition from "../topAdd"
import { FC } from "react"
import "../../css/obstacle.css"

interface CreateObstacleProp {
    move:number,
    source:string
}

const CreateObstacle:FC<CreateObstacleProp> = ({move,source}) => {
    let deviceSize = useDeviceSize().size
    let topAdd = topAddition({
        size:deviceSize.height,
        to:"obstacle"
    })

    return (<>
        <img
            className="Obstacle"
            src={source}
            style={{
                top:topAdd,
                marginLeft:move + "%"
            }}
        />
    </>)
}

export default CreateObstacle