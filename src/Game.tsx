import router from './router'
import { useState } from 'react'
import { RouterProvider } from "react-router-dom"
import { CreateScore } from './globalContext/score'
import { CreateStart } from "./globalContext/start"
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
  let [waiting, setWaiting] = useState<waitingForTheElement>({
    bestScore:false,
    floor:false,
    gameOver:false,
    obstcle:false,
    pause:false,
    player:false,
    score:false,
    theme:false
  })
  let [start, setStart] = useState<boolean>(false)
  let [score, setScore] = useState<number>(0)

  return (<>
    <DeviceSize.Provider value={{ size: deviceSize, setSize: setDeviceSize }}>
      <ChildsTheme.Provider value={{ childs: childsTheme, setChilds: setChildsTheme }}>
        <CreatePress.Provider value={{ event: Press, setEvent: setPress }}>
          <CreateLoading.Provider value={{ waiting: waiting, setWaiting: setWaiting }}>
            <CreateStart.Provider value={{ canStart: start, setCanStart: setStart }}>
              <CreateScore.Provider value={{pits:score,setPits:setScore}}>
                <RouterProvider router={router} />
              </CreateScore.Provider>
            </CreateStart.Provider>
          </CreateLoading.Provider>
        </CreatePress.Provider>
      </ChildsTheme.Provider>
    </DeviceSize.Provider>
  </>)
}

export default Game
