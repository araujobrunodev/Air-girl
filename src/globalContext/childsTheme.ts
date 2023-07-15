import { createContext,useContext } from "react";

interface ChildsTheme_ {
    childs:React.ReactNode[]
    setChilds: (element:React.ReactNode[]) => void
}

let ChildsTheme = createContext({} as ChildsTheme_)

let useChildsTheme = () => useContext(ChildsTheme)

export { ChildsTheme, useChildsTheme }