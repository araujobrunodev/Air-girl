import {useState,useEffect} from "react"
import RenderPlayer from "./render"

const Player = () => {
    let [RP,setRP] = useState(<></>)
    let [spriteNumber,setSpriteNumber] = useState<number>(0)

    useEffect(() => {
        let runP = () => {
            let fase = setTimeout(() => {
                if (spriteNumber == 0) return setSpriteNumber(1)
                if (spriteNumber == 1) return setSpriteNumber(2)
                if (spriteNumber == 2) return setSpriteNumber(1)
            },150) 

            return () => clearTimeout(fase)
        }

        let renderP = () => {
            setRP(
                <RenderPlayer
                sprite={spriteNumber}
                posY={-140}
                />
            )
        }

        let Main = setTimeout(() => {
            runP()
            renderP()
        },10)

        return () => clearTimeout(Main)
    },[RP])

    return (<>  
        {RP}  
    </>)
}

export default Player