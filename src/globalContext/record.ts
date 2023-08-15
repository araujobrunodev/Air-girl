import { useContext,createContext } from "react"

interface Record {
    value:number,
    setValue:(val:number) => void
}

const CreateContext = createContext({} as Record)

const useRecord = () => useContext(CreateContext)

export { CreateContext, useRecord }