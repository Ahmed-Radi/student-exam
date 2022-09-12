import './Question.css'
function Question({ data, click, refHightQuestion }) {
    return (
        <div className="question-header" ref={refHightQuestion}>
            <p className="question-header__title">Question {data?.length}/{click+1}</p>
            {data?.map(d => <p key={d} className="question-header__question">{d.word}</p>).splice(click,1)}
        </div>
    )
}

export default Question