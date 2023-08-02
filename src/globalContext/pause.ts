import { createContext,useContext } from "react"

interface Pause {
    active:boolean,
    setActive:(act:boolean) => void
}

const CreatePause = createContext({} as Pause)

const usePause = () => useContext(CreatePause)

export { CreatePause, usePause }