import { Item, useChildsTheme } from "../../globalContext/childsTheme"
import createIdentification from "../identification"
import { usePause } from "../../globalContext/pause"
import { FC, ReactElement, useEffect, useState } from "react"
import CreateTheme from "./createTheme"
import "../../css/theme.css"
import { useScore } from "../../globalContext/score"

interface ThemeProps {
	children: ReactElement
}

const Theme: FC<ThemeProps> = ({children}) => {
	const Time: number = 200
	let pause = usePause()
	let childsTheme = useChildsTheme()
	let [speed, setSpeed] = useState(1)
	let [canCreate, setCanCreate] = useState<boolean>(true)
	let [component, setComponent] = useState<any>(childsTheme.childs.map((item) => {
		return <CreateTheme
			key={item.key}
			space={item.value}
		/>
	}))
	let score = useScore()

	useEffect(() => {
		if (score.pits % 5 == 0 && speed != 27) setSpeed(++speed)
	}, [score.pits])

	useEffect(() => {
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
				item.setValue(item.value += speed)

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
	}, [childsTheme.childs, pause.active])

	return (
		<div id="Container">
		{
			childsTheme.childs.length != 0 ?
				component : undefined
		}
		{
			children
		}
		</div>
	)
}

export default Theme