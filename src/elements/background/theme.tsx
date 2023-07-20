import { useEffect } from "react"
import { useChildsTheme } from "../../globalContext/childsTheme"
import CreateTheme from "./createTheme"
import createIdentification from "../identification"

const Theme = () => {
	let childsTheme = useChildsTheme()

	useEffect(() => {
		let time = setInterval(() => {
			if (childsTheme.childs.length != 1) {
				childsTheme.setChilds([
					...childsTheme.childs,
					{
						key: createIdentification(),
						value: 0
					}
				])
			}
		}, 1000 * 1)

		return () => clearInterval(time);
	}, [childsTheme.childs])

	console.log(childsTheme.childs)

	return (<>
		{
			childsTheme.childs.length != 0 ?
				childsTheme.childs.map((item) => {
					return <CreateTheme
						key={item.key}
						marginRight={item.value}
					/>
				}) : undefined
		}
	</>)
}

export default Theme