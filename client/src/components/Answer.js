import AnswerList from './AnswerList';

function Answer({ handleClick, refHight, answer, click, selectedIsCorrect }) {

    return (
        <div>
            <ul className="answer-list" ref={refHight}>
                <AnswerList answer={answer} click={click} selectedIsCorrect={selectedIsCorrect} handleClick={handleClick} />
            </ul>
        </div>
    )
}

export default Answer