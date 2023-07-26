import { FC } from "react"
import { useDeviceSize } from "../../globalContext/deviceSize"

interface CreateThemeProp {
	space: number,
	key:string
}

const CreateTheme: FC<CreateThemeProp> = ({ space }) => {
	let deviceSize = useDeviceSize().size
	let top = deviceSize.height >= 900 ? -2 :
		deviceSize.height >= 800 ? -9 :
			deviceSize.height >= 700 ? -24 : 0

	return <>
		<img
			src="../../../public/theme.png"
			style={{
				display: "relative",
				width: deviceSize.width,
				height: "20rem",
				marginTop: 90 + top + "%",
				marginLeft: - space + "px"
			}}
		/>
	</>
}

export default CreateTheme