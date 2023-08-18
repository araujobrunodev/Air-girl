import { Link } from "react-router-dom"
import "../css/mainPage.css"

const MainPage = () => {
    return (<div id="mainBody">
        <div id="line-left"></div>
        <div id="line-right"></div>

        <div className="Container">
            <div className="Item"></div>
            <div className="Item"></div>
            <div className="Item"></div>
            <div className="Item"></div>
            <div className="Item"></div>
            <div className="Item"></div>
        </div>

        <h1 id="title">Air <br/> girl</h1>

        <Link to={"/playing"}>
            <button id="mainButton">Play</button>
        </Link>
    </div>)
}

export default MainPage
