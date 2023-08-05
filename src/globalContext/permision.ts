import { createContext,useContext } from "react"

interface Permision {
    create:boolean,
    setCreate:(c:boolean) => void
}

const CreatePermision = createContext({} as Permision)

const usePermision = () => useContext(CreatePermision)

export { CreatePermision,usePermision }