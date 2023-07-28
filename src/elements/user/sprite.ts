interface Sprite {
    Name:string,
    Path:string
}

const stopped:Sprite = {Name:"stopped",Path:"../../../girl stopped.png"}

const runner_1:Sprite = {Name:"runner 1",Path:"../../../girl runner 1.png"}

const runner_2:Sprite = {Name:"runner 2",Path:"../../../girl runner 2.png"}

const fallen_1:Sprite = {Name:"fallen 1",Path:"../../../girl fallen 1.png"}

const fallen_2:Sprite = {Name:"fallen 2",Path:"../../../girl fallen 2.png"}

const jump_1:Sprite = {Name:"jump 1",Path:"../../../girl jump 1.png"}

const jump_2:Sprite = {Name:"jump 2",Path:"../../../girl jump 2.png"}

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