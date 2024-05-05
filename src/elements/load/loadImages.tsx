const car = "/car 1.png"
const rock = "/rock.png"
const trafficCone = "/traffic cone.png"
const fallen1 = "/girl fallen 1.png"
const fallen2 = "/girl fallen 2.png"
const jump1 = "/girl jump 1.png"
const jump2 = "/girl jump 2.png"
const run1 = "/girl runner 1.png"
const run2 = "/girl runner 2.png"
const stop = "/girl stopped.png"
const theme = "/theme.png"
const unpause = "/unpause.svg"
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