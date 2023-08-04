import router from './router'
import { useState } from 'react'
import { CreatePause } from './globalContext/pause'
import { RouterProvider } from "react-router-dom"
import { CreateScore } from './globalContext/score'
import { CreateStart } from "./globalContext/start"
import { CreatePress } from "./globalContext/press"
import { DeviceSize } from './globalContext/deviceSize'
import { ChildsTheme, Item } from './globalContext/childsTheme'
import { CreateObstacle, itemObstacle } from './globalContext/childsObstacle'
import { CreateLoading, waitingForTheElement } from './globalContext/loading'

function Game() {
  let [score, setScore] = useState<number>(0)
  let [Press, setPress] = useState<boolean>(false)
  let [start, setStart] = useState<boolean>(false)
  let [pause, setPause] = useState<boolean>(false)
  let [childsTheme, setChildsTheme] = useState([] as Item[])
  let [obstacle,setObstacle] = useState([] as itemObstacle[])
  let [deviceSize, setDeviceSize] = useState(
    {
      width: window.screen.width,
      height: window.screen.height
    }
  );
  let [waiting, setWaiting] = useState<waitingForTheElement>({
    bestScore:false,
    gameOver:false,
    obstacle:false,
    player:false,
    floor:false,
    pause:false,
    score:false,
    theme:false
  })

  return (<>
    <DeviceSize.Provider value={{ size: deviceSize, setSize: setDeviceSize }}>
      <ChildsTheme.Provider value={{ childs: childsTheme, setChilds: setChildsTheme }}>
        <CreatePress.Provider value={{ event: Press, setEvent: setPress }}>
          <CreateLoading.Provider value={{ waiting: waiting, setWaiting: setWaiting }}>
            <CreateStart.Provider value={{ canStart: start, setCanStart: setStart }}>
              <CreateScore.Provider value={{pits:score,setPits:setScore}}>
                <CreatePause.Provider value={{active:pause,setActive:setPause}}>
                  <CreateObstacle.Provider value={{item:obstacle,setItem:setObstacle}}>
                    <RouterProvider router={router} />
                  </CreateObstacle.Provider>
                </CreatePause.Provider>
              </CreateScore.Provider>
            </CreateStart.Provider>
          </CreateLoading.Provider>
        </CreatePress.Provider>
      </ChildsTheme.Provider>
    </DeviceSize.Provider>
  </>)
}

export default Game
