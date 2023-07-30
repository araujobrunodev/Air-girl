import { useState, useEffect } from "react"
import RenderPlayer from "./render"
import { usePress } from "../../globalContext/press"


const Player = () => {
    let [RP, setRP] = useState(<></>)
    let [spriteNumber, setSpriteNumber] = useState<number>(0)
    const defaultPostion = 20
    let [position,setPosition] = useState(defaultPostion)
    let [active,setActive] = useState<string>("")
    let [repeat,setRepeat] = useState(0)
    let press = usePress()

    useEffect(() => {
        let jumpP = () => {
            if (!press.event) return;

            let fase1 = setTimeout(() => {
                let defaultS:number = 45

                if (active == "") { 
                    setSpriteNumber(5)
                    setRepeat(repeat+= 1)
                    setPosition(defaultPostion + (defaultS * repeat))
                    
                    if (repeat == 2) setActive(active = "1")
                    
                    return;
                }
                if (active == "1") {
                    setSpriteNumber(6)
                    setRepeat(repeat--)
                    setPosition(defaultPostion + (defaultS/repeat))

                    if (repeat == 1) setActive("2")

                    return;
                }
                
                if (active == "2") {
                    setRepeat(0)
                    setActive("")
                    setSpriteNumber(1)
                    setPosition(defaultPostion)
                    press.setEvent(false)
                    return;
                }
            },70)

            return () => clearTimeout(fase1)
        }

        let runP = () => {
            if (press.event) return;

            let fase = setTimeout(() => {
                if (spriteNumber === 0) return setSpriteNumber(1)
                if (spriteNumber === 1) return setSpriteNumber(2)
                if (spriteNumber === 2) return setSpriteNumber(1)
            }, 150)

            return () => clearTimeout(fase)
        }

        let renderP = () => {
            setRP(
                <RenderPlayer
                    sprite={spriteNumber}
                    posY={-position}
                />
            )
        }

        let Main = setTimeout(() => {
            runP()
            jumpP()
            renderP()
        }, 40)

        return () => clearTimeout(Main)
    }, [RP])

    return (<>
        {RP}
    </>)
}

export default Player