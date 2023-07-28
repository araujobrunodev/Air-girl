import router from './router'
import { useState } from 'react'
import { CreatePress } from "./globalContext/press"
import { RouterProvider } from "react-router-dom"
import { DeviceSize } from './globalContext/deviceSize'
import { ChildsTheme, Item } from './globalContext/childsTheme'

function Game() {
  let [deviceSize, setDeviceSize] = useState(
    {
      width: window.screen.width,
      height: window.screen.height
    }
  );
  let [childsTheme, setChildsTheme] = useState([] as Item[])
  let [Press, setPress] = useState<boolean>(false)

  return (<>
    <DeviceSize.Provider value={{ size: deviceSize, setSize: setDeviceSize }}>
      <ChildsTheme.Provider value={{ childs: childsTheme, setChilds: setChildsTheme }}>
        <CreatePress.Provider value={{ event: Press, setEvent: setPress }}>
          <RouterProvider router={router} />
        </CreatePress.Provider>
      </ChildsTheme.Provider>
    </DeviceSize.Provider>
  </>)
}

export default Game
