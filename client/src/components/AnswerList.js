import './AnswerList.css';

function AnswerList({  handleClick }) {
    const words = ["adjective", "noun", "verb", "adverb"]
    return (
        <>
            {
                words.map((word,i) => (
                    <>
                        <li className="answer-list__item" key={i} onClick={_ => handleClick(word)}>{word}</li>
                    </>
                ))
            }
        </>
    )
}

export default AnswerList