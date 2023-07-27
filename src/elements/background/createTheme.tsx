import { FC } from "react"
import { useDeviceSize } from "../../globalContext/deviceSize"

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
			style={{
				display: "relative",
				width: deviceSize.width,
				height: "20rem",
				marginTop: top + "%",
				marginLeft: - space + "px"
			}}
		/>
	</>
}

export default CreateTheme