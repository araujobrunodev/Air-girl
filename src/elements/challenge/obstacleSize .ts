interface DefaultObstacleSize {
    name:"traffic cone" | "car" | "rock"
}

interface DefaultSize {
    width:number,
    height:number
}

const obstacleSize = ({name}:DefaultObstacleSize) => {
    let result:DefaultSize = {height:0,width:0} 

    switch (name) {
        case "car":
            result.width = 120
            result.height = 55
            break

        case "rock":
            result.height = 75
            result.height = 60
            break

        case "traffic cone":
            result.width = 50
            result.height = 53
            break
    }

    return result
} 

export default obstacleSize