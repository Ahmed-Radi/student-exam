import Finish from '../components/Finish';
import './ScorePage.css';

function ScorePage({ percentage, tryAgain }) {
    return (
        <div className="score-container">
            <Finish percentage={percentage} tryAgain={tryAgain} />
        </div>
    )
}

export default ScorePage