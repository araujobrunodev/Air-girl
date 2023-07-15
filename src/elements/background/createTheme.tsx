import { createElement } from "react"
import createIdentification from "../identification"

const CreateTheme = () => {
    const element = createElement(
        "img",
        {
            src:"../../../public/theme.png",
            key:createIdentification()
        }
    )

    return element
}

export default CreateTheme