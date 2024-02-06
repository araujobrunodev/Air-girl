type suggest = "player" | "baseTheme" | "theme" | "obstacle"

interface TopAddition {
    to: suggest,
    size: number
}

const topAddition = ({ to, size }: TopAddition): number => {
    let result: number = 0

    switch (to) {
        case "player":
            if (size >= 1200) result = -490;
            else if (size >= 412) result = -513;
	        else if (size >= 390) result = -482;
            else if (size >= 384) result = -491;
            else if (size >= 375) result = -462;
            else if (size >= 360) result = -420;
            break
        case "obstacle":
            result = -1
            break
    }

    return result
}


export default topAddition