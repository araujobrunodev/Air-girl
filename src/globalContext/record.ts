import { useContext,createContext } from "react"

interface Record {
    value:number,
    setValue:(val:number) => void
}

const CreateRecord = createContext({} as Record)

const useRecord = () => useContext(CreateRecord)

export { CreateRecord, useRecord }