import Question from "../components/Question";
import Answer from "../components/Answer";
import { Navigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import './QuestionPage.css';
import { useEffect, useRef, useState } from 'react';

function QuestionPage({ data, handleClick, answer,setClick, click, next, setNext, selectedIsCorrect }) {
	const fun = () => {
        setClick(prev => next ? prev : prev + 1);
		setNext(prev=> prev = true)
	}
    const [height, setHeight] = useState(0)
    const [heightQuestion, setHeightQuestion] = useState(0)
    const refHight = useRef(null)
    const refHightQuestion = useRef(null)

    useEffect(() => {
        setHeight(refHight?.current?.clientHeight)
        setHeightQuestion(refHightQuestion?.current?.clientHeight)
    }, [])
    console.log(heightQuestion)
	return (
		<div className="question-container">
			<div className='question-body'>
				{answer.length === data?.length && data?.length !== 0 && next ? (
                        <Navigate to="/score" />
				) : (
					<>
						<ProgressBar completed={click+1} maxCompleted={data?.length} />
						{
							next ? <>
								<Question refHightQuestion={refHightQuestion} data={data} click={click} />
								<Answer
                                    refHight={refHight}
									click={click}
									handleClick={handleClick}
									answer={answer}
									selectedIsCorrect={selectedIsCorrect}
								/>
							</> : <div className="word-result" style={{ height: `${height+heightQuestion}px`}}>
								{
									answer[click]?.isCorrect ? <p className="word-result__result">true</p> : <p className="word-result__result">false</p>
								}
							</div>
						}
                        <button className="next-button" onClick={() => fun()}>next</button>
					</>
				)}
			</div>
		</div>
	);
}

export default QuestionPage;
