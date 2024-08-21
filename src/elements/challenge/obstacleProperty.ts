const car = "/car 1.png"
const rock = "/rock.png"
const trafficCone = "/traffic cone.png"

interface ObstacleProperty {
	name: "car" | "rock" | "traffic cone",
}

const findObstacleProperty = ({name}:ObstacleProperty) => {
    let result = {height:0,width:0,name:""}

    switch (name) {
        case "car":
            result.width = 66
            result.name = car
            break

        case "rock":
            result.width = 70
            result.name = rock
            break

        case "traffic cone":
            result.width = 55
            result.name = trafficCone
            break
    }

    return result
}

export default findObstacleProperty