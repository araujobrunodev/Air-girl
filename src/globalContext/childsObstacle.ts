import { createContext, useContext } from "react"

interface ObstacleSize {
    width:number,
    height:number
}

interface ItemObstacle {
    key:string,
    move:number,
    sourcePath:string,
    size:ObstacleSize,
    setSize:(obstacleSize:ObstacleSize) => void
    setMove:(value:number) => void
}

export type itemObstacle = ItemObstacle

interface ChildsObstacle {
    item:ItemObstacle[]
    setItem:(itemParameter:any) => void
}

const CreateObstacle = createContext({} as ChildsObstacle)

const useObstacle = () => useContext(CreateObstacle)

export { CreateObstacle,useObstacle }