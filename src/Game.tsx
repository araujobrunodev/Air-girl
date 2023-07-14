import { useState } from 'react'
import { RouterProvider } from "react-router-dom"
import router from './router'

function Game() {
  return (<>
    <RouterProvider router={router}/>
  </>)
}

export default Game
