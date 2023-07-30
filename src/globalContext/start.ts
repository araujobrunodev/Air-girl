import { createContext,useContext } from "react"

interface Start {
    canStart:boolean,
    setCanStart:(CanStart:boolean) => void
}

type start = Start

const CreateStart = createContext({} as start)

const useStart = useContext(CreateStart)

export { CreateStart,useStart }