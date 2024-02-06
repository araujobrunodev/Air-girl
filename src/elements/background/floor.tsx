import { useEffect } from "react"
import { useLoading } from "../../globalContext/loading"

const Floor = () => {
    let loading = useLoading()

    useEffect(() => {
        if (!loading.waiting.floor) {
            loading.setWaiting({
                ...loading.waiting,
                floor:true,
            })
        } 
    },[loading])
    return (<>
        <div id="floor"></div>
    </>)
}

export default Floor