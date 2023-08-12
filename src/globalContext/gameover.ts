import { useContext,createContext } from "react";

interface GameOver {
    active:boolean
}

const CreateGameOver = createContext({} as GameOver)

const useGameOver = () => useContext(CreateGameOver)

export { CreateGameOver, useGameOver }