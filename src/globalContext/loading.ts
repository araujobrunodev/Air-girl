import { createContext,useContext } from "react"

interface WaitingForTheElement {
    images: boolean
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