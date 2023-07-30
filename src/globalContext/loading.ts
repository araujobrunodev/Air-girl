import { createContext,useContext } from "react"

interface WaitingForTheElement {
    theme:boolean,
    player:boolean,
    floor:boolean,
    score:boolean,
    bestScore:boolean,
    obstcle:boolean,
    pause:boolean,
    gameOver:boolean
}

interface Loading {
    waiting:WaitingForTheElement
    setWaiting:(WFTE:WaitingForTheElement) => void
}

type loading = Loading

export type waitingForTheElement = WaitingForTheElement

let CreateLoading = createContext({} as loading)

let useLoading = () => useContext(CreateLoading)

export { CreateLoading,useLoading }