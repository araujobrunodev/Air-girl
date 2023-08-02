type suggest = "player" | "baseTheme" | "theme" | "obstacle"

interface TopAddition {
    to: suggest,
    size: number
}

const topAddition = ({ to, size }: TopAddition): number => {
    let result: number = 0

    switch (to) {
        case "player":
            if (size >= 900) result = -590;
            else if (size >= 880) result = -567;
						else if (size >= 850) result = -544;
            else if (size >= 800) result = -507;
            else if (size >= 700) result = -474;
            else result = -500
            break
        case "theme":
            if (size >= 900) result = 20;
            else if (size >= 800) result = 14;
            else if (size >= 700) result = 1;
            else result = 0
            break       
        case "baseTheme":
            if (size >= 920) result = 47;
            else if (size >= 900) result = 45;
            else if (size >= 890) result = 53;
            else if (size >= 880) result = 45;
            else if (size >= 850) result = 27;
            else if (size >= 840) result = 20;
            else if (size >= 800) result = -3;
            else if (size >= 700) result = 7;
            break
    }

    return result
}


export default topAddition