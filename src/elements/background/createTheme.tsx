import { useDeviceSize } from "../../globalContext/deviceSize"
import { FC } from "react"
import theme from "../../images/theme.png"
import "../../css/createTheme.css"

interface CreateThemeProp {
	space: number,
	key:string
}

const CreateTheme: FC<CreateThemeProp> = ({ space }) => {
	let deviceSize = useDeviceSize().size

	return <>
		<img
			src={theme}
			className="createThemeS"
			style={{
				marginLeft: - space + "px",
			}}
		/>
	</>
}

export default CreateTheme