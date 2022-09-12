import axios from "axios"
import { useEffect } from "react"

function Finish({ percentage, tryAgain }) {
    useEffect(() => {
        // if (!isNaN(percentage)) {
        //     axios.get(`localhost:4001/score/`, percentage)
        // }
    },[])
    return (
        <>
            <div className='result'>your result is <span className="result__score">{percentage}</span></div>
            <button className='try-button' onClick={tryAgain}>try again</button>
        </>
    )
}

export default Finish