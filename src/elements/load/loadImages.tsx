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
    const limit = images.length
    let [count,setCount] = useState(0)
    let loading = useLoading()

    const loadImg = async () => {
        console.log(images[count])    
        
        setTimeout(() => {
            setCount(++count)
        }, 1000 * 1)
    }

    useEffect(() => {
        if (count == limit && !loading.waiting.images) {
            console.log("all imagens was loaded")
            loading.setWaiting({
                ...loading.waiting,
                images: true
            })
        }
    })

    return (
        <img
            src={images[count]}
            id="iconWait"
            onLoad={() => {
                if (count != limit) loadImg()
            }}
            onError={() => console.log("cant find:",images[count])}
            hidden={false}
        />
    )
}

export default LoadImages