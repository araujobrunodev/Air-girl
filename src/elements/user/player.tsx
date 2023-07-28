import {useState,useEffect} from "react"
import RenderPlayer from "./render"

const Player = () => {
    let [RP,setRP] = useState(<></>)

    useEffect(() => {
        let renderP = () => {
            setRP(
                <RenderPlayer
                sprite={0}
                posY={-140}
                />
            )
        }

        let Main = setTimeout(() => {
            renderP()
        },800)

        return () => clearTimeout(Main)
    },[RP])

    return (<>  
        {RP}  
    </>)
}

export default Player