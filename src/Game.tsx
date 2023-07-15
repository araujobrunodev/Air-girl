import { useState } from 'react'
import { RouterProvider } from "react-router-dom"
import router from './router'
import { DeviceSize } from './globalContext/deviceSize'
import { ChildsTheme } from './globalContext/childsTheme'

function Game() {
  let [deviceSize,setDeviceSize] = useState(
    {
      width: window.screen.width,
      height: window.screen.height
    }
  );
  let [childsTheme,setChildsTheme] = useState([] as React.ReactNode[])

  return (<>
  <DeviceSize.Provider value={{size:deviceSize,setSize:setDeviceSize}}>
    <ChildsTheme.Provider value={{childs:childsTheme,setChilds:setChildsTheme}}>
      <RouterProvider router={router}/>
    </ChildsTheme.Provider>
  </DeviceSize.Provider>
  </>)
}

export default Game
