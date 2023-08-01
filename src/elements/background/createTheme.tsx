import { useDeviceSize } from "../../globalContext/deviceSize"
import { FC } from "react"
import "../../css/createTheme.css"

interface CreateThemeProp {
	space: number,
	key:string
}

const CreateTheme: FC<CreateThemeProp> = ({ space }) => {
	let deviceSize = useDeviceSize().size
	let top = deviceSize.height >= 900 ? 20 :
		deviceSize.height >= 800 ? 14 :
			deviceSize.height >= 700 ? 1 : 0

	return <>
		<img
			src="../../../theme.png"
			className="createThemeS"
			style={{
				marginTop: top + "%",
				marginLeft: - space + "px",
			}}
		/>
	</>
}

export default CreateTheme