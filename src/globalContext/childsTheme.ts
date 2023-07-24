import { createContext,useContext } from "react";

export interface Item {
    value:number,
    key:string,
    setValue:(val:any) => void
}

interface ChildsTheme_ {
    childs:Item[]
    setChilds: (element:Item[]) => void
}

let ChildsTheme = createContext({} as ChildsTheme_)

let useChildsTheme = () => useContext(ChildsTheme)

export { ChildsTheme, useChildsTheme }