import { CreateLoading, waitingForTheElement } from './globalContext/loading'
import { CreateObstacle, itemObstacle } from './globalContext/childsObstacle'
import { ChildsTheme, Item } from './globalContext/childsTheme'
import { CreatePermision } from './globalContext/permision'
import { CreateGameOver } from './globalContext/gameover'
import { DeviceSize } from './globalContext/deviceSize'
import { CreateRecord } from "./globalContext/record"
import { CreatePause } from './globalContext/pause'
import { CreateScore } from './globalContext/score'
import { CreateStart } from "./globalContext/start"
import { CreatePress } from "./globalContext/press"
import { RouterProvider } from "react-router-dom"
import { useState } from 'react'
import router from './router'

function Game() {
  let [score, setScore] = useState<number>(0)
  let [Press, setPress] = useState<boolean>(false)
  let [start, setStart] = useState<boolean>(false)
  let [pause, setPause] = useState<boolean>(false)
  let [reset, setReset] = useState<boolean>(false)
  let [record, setRecord] = useState<number>(0)
  let [permision, setPermision] = useState<boolean>(false)
  let [childsTheme, setChildsTheme] = useState([] as Item[])
  let [obstacle, setObstacle] = useState([] as itemObstacle[])
  let [deviceSize, setDeviceSize] = useState(
    {
      width: window.screen.width,
      height: window.screen.height
    }
  );
  let [waiting, setWaiting] = useState<waitingForTheElement>({
    bestScore: false,
    gameOver: false,
    obstacle: false,
    player: false,
    floor: false,
    pause: false,
    score: false,
    theme: false
  })

  return (<>
    <DeviceSize.Provider value={{ size: deviceSize, setSize: setDeviceSize }}>
      <CreateGameOver.Provider value={{ active: reset, setActive: setReset }}>
        <ChildsTheme.Provider value={{ childs: childsTheme, setChilds: setChildsTheme }}>
          <CreatePress.Provider value={{ event: Press, setEvent: setPress }}>
            <CreateLoading.Provider value={{ waiting: waiting, setWaiting: setWaiting }}>
              <CreateStart.Provider value={{ canStart: start, setCanStart: setStart }}>
                <CreateScore.Provider value={{ pits: score, setPits: setScore }}>
                  <CreatePause.Provider value={{ active: pause, setActive: setPause }}>
                    <CreateObstacle.Provider value={{ item: obstacle, setItem: setObstacle }}>
                      <CreatePermision.Provider value={{ create: permision, setCreate: setPermision }}>
                        <CreateRecord.Provider value={{value:record,setValue:setRecord}}>
                          <RouterProvider router={router} />
                        </CreateRecord.Provider>
                      </CreatePermision.Provider>
                    </CreateObstacle.Provider>
                  </CreatePause.Provider>
                </CreateScore.Provider>
              </CreateStart.Provider>
            </CreateLoading.Provider>
          </CreatePress.Provider>
        </ChildsTheme.Provider>
      </CreateGameOver.Provider>
    </DeviceSize.Provider>
  </>)
}

export default Game
