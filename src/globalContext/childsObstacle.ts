import { createContext, useContext } from "react"

interface ItemObstacle {
    key:string,
    move:number,
    sourcePath:string
}

export type itemObstacle = ItemObstacle

interface ChildsObstacle {
    item:ItemObstacle[]
    setItem:(itemParameter:any) => void
}

const CreateObstacle = createContext({} as ChildsObstacle)

const useObstacle = () => useContext(CreateObstacle)

export { CreateObstacle,useObstacle }