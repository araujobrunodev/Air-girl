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

    result = 6

    return result
}


export default topAddition