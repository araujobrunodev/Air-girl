import router from './router'
import { useState } from 'react'
import { CreateStart } from "./globalContext/start"
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
  let [start, setStart] = useState<boolean>(false)

  return (<>
    <DeviceSize.Provider value={{ size: deviceSize, setSize: setDeviceSize }}>
      <ChildsTheme.Provider value={{ childs: childsTheme, setChilds: setChildsTheme }}>
        <CreatePress.Provider value={{ event: Press, setEvent: setPress }}>
          <CreateLoading.Provider value={{ waiting: waiting, setWaiting: setWaiting }}>
            <CreateStart.Provider value={{ canStart: start, setCanStart: setStart }}>
              <RouterProvider router={router} />
            </CreateStart.Provider>
          </CreateLoading.Provider>
        </CreatePress.Provider>
      </ChildsTheme.Provider>
    </DeviceSize.Provider>
  </>)
}

export default Game
