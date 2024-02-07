type suggest = "player" | "baseTheme" | "theme" | "obstacle"

interface TopAddition {
    to: suggest,
    size: {
        width: number,
        height: number
    }
}

const topAddition = ({ to, size }: TopAddition): number => {
    let result: number = 0
    let width = size.width
    let height = size.height

    switch (to) {
        case "player":
            if (width >= 1200) result = -100;
            else if (width == 412 && height == 892) result = -383;
            else if (width >= 412) result = -513;
	        else if (width >= 390) result = -482;
            else if (width >= 384) result = -491;
            else if (width >= 375) result = -462;
            else if (width >= 360) result = -420;
            break
    }

    return result
}


export default topAddition