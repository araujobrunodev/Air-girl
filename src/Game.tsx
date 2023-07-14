import { useState } from 'react'
import { RouterProvider } from "react-router-dom"
import router from './router'
import { DeviceSize } from './globalContext/deviceSize'

function Game() {
  let [deviceSize,setDeviceSize] = useState(
    {
      width: window.screen.width,
      height: window.screen.height
    }
  );

  return (<>
  <DeviceSize.Provider value={{size:deviceSize,setSize:setDeviceSize}}>
    <RouterProvider router={router}/>
  </DeviceSize.Provider>
  </>)
}

export default Game
