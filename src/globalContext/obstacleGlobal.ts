import { createContext, useContext } from "react";

interface ObstacleGlobal {
    time: number,
    setTime: (t?: number) => void,
    speedLimit: number,
    setSpeedLimit: (s?: number) => void,
    speedMove: number,
    setSpeedMove: (m?: number) => void,
    createLimit: number,
    setCreateLimit: (c?: number) => void
}

const CreateObstacleGlobal = createContext({} as ObstacleGlobal)
const useObstacleGlobal = () => useContext(CreateObstacleGlobal)

export {CreateObstacleGlobal, useObstacleGlobal}