import { useDeviceSize } from "../../globalContext/deviceSize"
import topAddition from "../topAdd"
import { FC } from "react"
import "../../css/createTheme.css"

interface CreateThemeProp {
	space: number,
	key:string
}

const CreateTheme: FC<CreateThemeProp> = ({ space }) => {
	let deviceSize = useDeviceSize().size
	let topAdd = topAddition({size:deviceSize.height,to:"theme"})

	return <>
		<img
			src="../../../theme.png"
			className="createThemeS"
			style={{
				marginTop: topAdd + "%",
				marginLeft: - space + "px",
			}}
		/>
	</>
}

export default CreateTheme