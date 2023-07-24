import { useEffect, useState } from "react"
import { Item, useChildsTheme } from "../../globalContext/childsTheme"
import CreateTheme from "./createTheme"
import createIdentification from "../identification"
import { useDeviceSize } from "../../globalContext/deviceSize"

interface RemoveComponent {
	has: boolean,
	key: string
}

const Theme = () => {
	let deviceSize = useDeviceSize()
	let childsTheme = useChildsTheme()
	let [canCreate, setCanCreate] = useState<boolean>(false)
	let [component, setComponent] = useState(childsTheme.childs.map((item) => {
		return <CreateTheme
			key={item.key}
			space={item.value}
		/>
	}))

	useEffect(() => {
		let Move = setInterval(() => {
			if (childsTheme.childs.length != 0) {
				childsTheme.childs.forEach((item) => {
					item.setValue(item.value++)
					if (item.value == 10) {
						setCanCreate(canCreate = true)
					}
				})
				setComponent(childsTheme.childs.map((item) => {
					return <CreateTheme
						key={item.key}
						space={item.value}
					/>
				}))
			}
		}, 100 * 1)

		let Create = setInterval(() => {
			if (childsTheme.childs.length < 1 || canCreate) {
				childsTheme.setChilds([
					...childsTheme.childs,
					{
						key: createIdentification(),
						value: 0,
						setValue: () => { }
					}
				])
				setCanCreate(canCreate = false)
			}
		}, 100)

		return () => {
			let listOrderComponent = [Create, Move]

			listOrderComponent.forEach((it) => {
				clearInterval(it)
			})
		};
	}, [childsTheme.childs])

	return (<div
		id="Container"
		style={{
			display: "flex",
			flexDirection: "row",
			width: deviceSize.size.width * 2 + "px",
			height: "20rem",
			margin: "0%",
			marginTop: "70%",
			padding: "0%",
			left: deviceSize.size.width + "px",
			gap: "0.1pt",
		}}>
		{
			childsTheme.childs.length != 0 ?
				component : undefined
		}
	</div>)
}

export default Theme