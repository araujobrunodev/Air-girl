import { useDeviceSize } from "../../globalContext/deviceSize"
import { FC } from "react"
import "../../css/createTheme.css"

interface CreateThemeProp {
	space: number,
	key:string
}

const CreateTheme: FC<CreateThemeProp> = ({ space }) => {
	let deviceSize = useDeviceSize().size

	return <>
		<img
			src="../../../theme.png"
			className="createThemeS"
			style={{
				marginLeft: - space + "px",
			}}
		/>
	</>
}

export default CreateTheme