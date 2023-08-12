import { useContext,createContext } from "react";

interface GameOver {
    active:boolean,
    setActive:(ac:boolean) => void
}

const CreateGameOver = createContext({} as GameOver)

const useGameOver = () => useContext(CreateGameOver)

export { CreateGameOver, useGameOver }