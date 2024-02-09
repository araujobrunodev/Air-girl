interface DefaultObstacleSize {
    name:"traffic cone" | "car" | "rock"
}

interface DefaultSize {
    width:number,
    height:number
}

const obstacleSize = ({name}:DefaultObstacleSize) => {
    let result:DefaultSize = {height:0,width:0} 
    let less = 15

    switch (name) {
        case "car":
            result.width = 66 - less
            result.height = 55 - less
            break

        case "rock":
            result.width = 70 - less
            result.height = 60 - less
            break

        case "traffic cone":
            result.width = 48 - less
            result.height = 53 - less
            break
    }

    return result
} 

export default obstacleSize