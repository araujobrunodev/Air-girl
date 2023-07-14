import {createContext,useContext} from "react"

interface DeviceSize_ {
    size: {
        width:number,
        height:number
    },
    setSize: (num:{width:number,height:number}) => void
}

let DeviceSize = createContext({} as DeviceSize_)

let useDeviceSize = () => useContext(DeviceSize)

export {DeviceSize,useDeviceSize}