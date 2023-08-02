type suggest = "player" | "theme" | "obstacle"

interface TopAddition {
    to: suggest,
    size: number
}

const topAddition = ({ to, size }: TopAddition): number => {
    let result: number = 0

    switch (to) {
        case "player":
            if (size >= 900) result = 20;
            else if (size >= 880) result = 44;
						else if (size >= 850) result = 50;
            else if (size >= 800) result = 70;
            else if (size >= 700) result = 99;
            else result = 0
            break
        case "theme":
            if (size >= 900) result = 20;
            else if (size >= 800) result = 14;
            else if (size >= 700) result = 1;
            else result = 0
            break       
    }

    return result
}


export default topAddition