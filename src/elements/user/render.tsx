import {FC} from "react"
import allSprite from "./sprite"

interface RenderPlayerProp {
    sprite:number,
    posY:number
}

const RenderPlayer:FC<RenderPlayerProp> = (prop) => {
    return (<>
        <img
        src={allSprite[prop.sprite].Path}
        alt={allSprite[prop.sprite].Name}
        id="player"
        style={{
            marginTop:prop.posY + "px"
        }}
        />
    </>)
}

export default RenderPlayer