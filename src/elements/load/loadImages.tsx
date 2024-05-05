import car from "../../images/car 1.png"
import rock from "../../images/rock.png"
import trafficCone from "../../images/traffic cone.png"
import fallen1 from "../../images/girl fallen 1.png"
import fallen2 from "../../images/girl fallen 2.png"
import jump1 from "../../images/girl jump 1.png"
import jump2 from "../../images/girl jump 2.png"
import run1 from "../../images/girl runner 1.png"
import run2 from "../../images/girl runner 2.png"
import stop from "../../images/girl stopped.png"
import theme from "../../images/theme.png"
import unpause from "../../images/unpause.svg"
import { useState, useEffect } from "react"
import { useLoading } from "../../globalContext/loading"

const images = [car, rock, trafficCone, fallen1, fallen2, jump1, jump2, run1, run2, stop, theme, unpause]

const LoadImages = () => {
    let [count,setCount] = useState(0)
    let [Load,setLoad] = useState(true)
    let loading = useLoading()
    let limit = images.length - 1

    useEffect(() => {
        if (count == limit && !loading.waiting.images) {
            loading.setWaiting({
                ...loading.waiting,
                images: true
            })
        }
        
        if (count == limit) return;
        
        images.map((img) => {
            if (Load == false ) {
                console.log("imagem carregada:",img)
                setCount(count++)
                setLoad(true)
            } 
        })
    })

    return (
        <img
            src={images[count]}
            id="loadImages"
            onLoad={() => setLoad(false)}
            onError={() => setLoad(true)}
            hidden={true}
        />
    )
}

export default LoadImages