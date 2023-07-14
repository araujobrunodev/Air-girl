import {createBrowserRouter,Outlet} from "react-router-dom"
import MainPage from "./pages"
import Play from "./pages/play"

const router = createBrowserRouter([{
    path:"/",
    element:<Outlet/>,
    children:[
        {
            path:"/",
            element:<MainPage/>
        },
        {
            path:"/playing",
            element:<Play/>
        }
    ]
}])

export default router