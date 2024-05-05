import { FC } from "react"
const theme = "/theme.png"
import "../../css/createTheme.css"

interface CreateThemeProp {
	space: number,
	key:string
}

const CreateTheme: FC<CreateThemeProp> = ({ space }) => {
	return (
		<img
			src={theme}
			className="createThemeS"
			style={{
				marginLeft: - space + "px",
			}}
		/>
	)
}

export default CreateTheme