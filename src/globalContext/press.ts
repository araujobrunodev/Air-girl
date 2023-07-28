import {createContext,useContext} from "react"

interface Press {
    event:boolean,
    setEvent:(val:boolean) => void
}

type press = Press

const CreatePress = createContext({} as press)

const usePress = () => useContext(CreatePress)

export {CreatePress,usePress}