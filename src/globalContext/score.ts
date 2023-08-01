import { createContext, useContext } from "react"

interface Score {
    pits:number
    setPits:(PITS:number) => void
}

type score = Score

const CreateScore = createContext({} as score)

const useScore = () => useContext(CreateScore)

export { CreateScore,useScore }