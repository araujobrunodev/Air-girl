import { useDeviceSize } from "../../globalContext/deviceSize"
import topAddition from "../topAdd"
import { FC } from "react"

interface CreateObstacleProp {
    move:number,
    key:string,
    source:string
}

const CreateObstacle:FC<CreateObstacleProp> = ({move,key,source}) => {
    let deviceSize = useDeviceSize().size
    let topAdd = topAddition({
        size:deviceSize.height,
        to:"obstacle"
    })

    return (<>
        <img
            className="Obstacle"
            src={source}
            key={key}
            style={{
                top:topAdd,
                left:move
            }}
        />
    </>)
}

export default CreateObstacle