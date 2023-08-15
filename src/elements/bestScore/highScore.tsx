import { useRecord } from "../../globalContext/record"

const BestScore = () => {
    const record = useRecord()

    return (<>
        <p 
        id="bestScore">
            bestScore:{record.value}
        </p>
    </>)
}

export default BestScore