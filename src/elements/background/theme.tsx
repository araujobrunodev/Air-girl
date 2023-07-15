import { useEffect } from "react"
import { useChildsTheme } from "../../globalContext/childsTheme"
import CreateTheme from "./createTheme"
import createIdentification from "../identification"

const Theme = () => {
    let childsTheme = useChildsTheme()

    useEffect(() => {
        let time = setInterval(() => {
            childsTheme.setChilds([
                ...childsTheme.childs,
                <CreateTheme key={createIdentification()}/>
            ])
        }, 1000 * 10)

        return () => clearInterval(time);
    }, [childsTheme.childs])

    console.log(childsTheme.childs)

    return (<>
        {
            childsTheme.childs.map((element) => {
                return element
            })
        }
    </>)
}

export default Theme