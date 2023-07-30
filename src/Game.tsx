import router from './router'
import { useState } from 'react'
import { RouterProvider } from "react-router-dom"
import { CreatePress } from "./globalContext/press"
import { DeviceSize } from './globalContext/deviceSize'
import { ChildsTheme, Item } from './globalContext/childsTheme'
import { CreateLoading, waitingForTheElement } from './globalContext/loading'

function Game() {
  let [deviceSize, setDeviceSize] = useState(
    {
      width: window.screen.width,
      height: window.screen.height
    }
  );
  let [childsTheme, setChildsTheme] = useState([] as Item[])
  let [Press, setPress] = useState<boolean>(false)
  let [waiting, setWaiting] = useState({} as waitingForTheElement)

  return (<>
    <DeviceSize.Provider value={{ size: deviceSize, setSize: setDeviceSize }}>
      <ChildsTheme.Provider value={{ childs: childsTheme, setChilds: setChildsTheme }}>
        <CreatePress.Provider value={{ event: Press, setEvent: setPress }}>
          <CreateLoading.Provider value={{ waiting: waiting, setWaiting: setWaiting }}>
            <RouterProvider router={router} />
          </CreateLoading.Provider>
        </CreatePress.Provider>
      </ChildsTheme.Provider>
    </DeviceSize.Provider>
  </>)
}

export default Game
