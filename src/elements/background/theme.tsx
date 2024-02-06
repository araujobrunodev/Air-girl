import { Item, useChildsTheme } from "../../globalContext/childsTheme"
import { useDeviceSize } from "../../globalContext/deviceSize"
import { useLoading } from "../../globalContext/loading"
import createIdentification from "../identification"
import { usePause } from "../../globalContext/pause"
import { useEffect, useState } from "react"
import CreateTheme from "./createTheme"
import "../../css/theme.css"

const Theme = () => {
	const Time: number = 200
	let loading = useLoading()
	let pause = usePause()
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
		if (typeof deviceSize.size.width == "number" &&
			typeof canCreate == "boolean" &&
			!loading.waiting.theme
		) {
			loading.setWaiting({
				...loading.waiting,
				theme: true
			})
		}

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

				if (item.value >= 200) {
					RemoveT(item.key)
				}

				if (childsTheme.childs.length < 3) {
					setCanCreate(canCreate = true)
				}
			})
		}

		const RemoveT = (key: string) => {
			childsTheme.setChilds(
				childsTheme.childs.filter((itemTheme: Item) =>
					itemTheme.key != key
				))
		}

		const RenderT = () => {
			setComponent(childsTheme.childs.map((item) => {
				return <CreateTheme
					key={item.key}
					space={item.value}
				/>
			}))
		}

		if (pause.active) return;

		let ThemeManager = setInterval(() => {
			MoveT()
			CreateT()
			RenderT()
		}, Time)

		return () => clearInterval(ThemeManager)
	}, [childsTheme.childs,pause.active])

	return (<div
		id="Container"
		>
		{
			childsTheme.childs.length != 0 ?
				component : undefined
		}
	</div>)
}

export default Theme