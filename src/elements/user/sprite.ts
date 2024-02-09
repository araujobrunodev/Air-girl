import stop from "../../images/girl stopped.png"
import runner1 from "../../images/girl runner 1.png"
import runner2 from "../../images/girl runner 2.png"
import jump1 from "../../images/girl jump 1.png"
import jump2 from "../../images/girl jump 2.png"
import fallen1 from "../../images/girl fallen 1.png"
import fallen2 from "../../images/girl fallen 2.png"

interface Sprite {
    Name:string,
    Path:string
}

const stopped:Sprite = {Name:"stopped",Path:stop}

const runner_1:Sprite = {Name:"runner 1",Path:runner1}

const runner_2:Sprite = {Name:"runner 2",Path:runner2}

const fallen_1:Sprite = {Name:"fallen 1",Path:fallen1}

const fallen_2:Sprite = {Name:"fallen 2",Path:fallen2}

const jump_1:Sprite = {Name:"jump 1",Path:jump1}

const jump_2:Sprite = {Name:"jump 2",Path:jump2}

const allSprite:Sprite[] = [
    stopped,
    runner_1,
    runner_2,
    fallen_1,
    fallen_2,
    jump_1,
    jump_2
]

export default allSprite