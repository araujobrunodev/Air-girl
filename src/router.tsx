import {createBrowserRouter,Outlet} from "react-router-dom"
import MainPage from "./pages"

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
        }
    ]
}])

export default router