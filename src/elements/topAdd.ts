type suggest = "player" | "baseTheme" | "theme" | "obstacle"

interface TopAddition {
    to: suggest,
    size: {
        width: number,
        height: number
    }
}

const topAddition = ({ to, size }: TopAddition): number => {
    const width = window.innerWidth
    let result: number = 0

    if (width >= 1100) 
        result = 3
    else 
        result = 6

    return result
}


export default topAddition