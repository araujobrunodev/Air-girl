import { FC } from "react"
import theme from "../../images/theme.png"
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