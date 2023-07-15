const createIdentification = ():string => {
    const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const SYMBOL = "@!#$?°₢"

    const randomABC = Math.round(Math.random() * (ABC.length - 1))
    const randomSYMBOL = Math.round(Math.random() * (SYMBOL.length - 1))
    const randomNUMBER = Math.round(Math.random() * 9)

    let identification = ABC[randomABC] + randomNUMBER + SYMBOL[randomSYMBOL]
    
    return identification
}

export default createIdentification