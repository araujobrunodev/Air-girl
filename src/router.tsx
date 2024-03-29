import {createHashRouter,Outlet} from "react-router-dom"
import PageNotFound from "./pages/page404"
import Play from "./pages/play"
import MainPage from "./pages"

const router = createHashRouter([{
    path:"/",
    element:<Outlet/>,
    errorElement:<PageNotFound/>,
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