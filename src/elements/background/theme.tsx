import { useEffect, useState } from "react"
import { Item, useChildsTheme } from "../../globalContext/childsTheme"
import CreateTheme from "./createTheme"
import createIdentification from "../identification"
import { useDeviceSize } from "../../globalContext/deviceSize"

const Theme = () => {
	let deviceSize = useDeviceSize()
	let childsTheme = useChildsTheme()
	let [canCreate, setCanCreate] = useState<boolean>(true)
	let [component, setComponent] = useState<any>(childsTheme.childs.map((item) => {
		return <CreateTheme
			key={item.key}
			space={item.value}
		/>
	}))

	useEffect(() => {
		let Time: number = 300

		const CreateT = () => {
			if (canCreate || childsTheme.childs.length == 0) {
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
		}

		const MoveT = () => {
			if (childsTheme.childs.length == 0) return

			childsTheme.childs.forEach((item) => {
				item.setValue(item.value += 1)

				if (item.value == 200) {
					RemoveT(item.key)
				}
				setTimeout(() => {
					if (childsTheme.childs.length < 5) {
						setCanCreate(canCreate = true)
					}
				},100)
			})
		}

		const RemoveT = (key: string) => {
			childsTheme.setChilds(
				childsTheme.childs.filter((itemTheme: Item) =>
					itemTheme.key != key
				))
				
			console.log(`before remove item ${key}:`, childsTheme.childs)
		}

		const RenderT = () => {
			setComponent(childsTheme.childs.map((item) => {
				return <CreateTheme
					key={item.key}
					space={item.value}
				/>
			}))
		}

		let ThemeManager = setInterval(() => {
			CreateT()
			MoveT()
			RenderT()
		}, Time)

		return () => clearInterval(ThemeManager)
	}, [childsTheme.childs])

	return (<div
		id="Container"
		style={{
			display: "flex",
			flexDirection: "row",
			width: deviceSize.size.width + "px",
			height: "20rem",
			margin: "0%",
			marginTop: "70%",
			padding: "0%",
			left: deviceSize.size.width + "px",
			gap: "0pt",
		}}>
		{
			childsTheme.childs.length != 0 ?
				component : undefined
		}
	</div>)
}

export default Theme