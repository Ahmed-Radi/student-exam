import "./App.css";
import QuestionPage from "./Pages/QuestionPage";
import ScorePage from "./Pages/ScorePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [click, setClick] = useState(0);
	const [percentage, setPercentage] = useState(0);
    const [next, setNext] = useState(true)
    const [selectedIsCorrect, setSelectedIsCorrect] = useState()
    const navigate = useNavigate();

	useEffect(() => {
		axios("http://localhost:4001/").then(res => setData(res.data));
	}, []);

	const handleClick = choose => {
        const newData = [...data];
        let word = newData?.splice(click, 1)[0]?.word;
        setNext(prev => prev = false)
        setAnswer(prev => prev.concat({ word, choose: choose, isCorrect: data?.find((item) => word === item.word)?.pos === choose, }));
        // setClick(prev => prev + 1);
        setSelectedIsCorrect(prev => prev = true)
	};

    const calculateResult = () => {
        let score = answer?.reduce((prev, {word, choose}) => {
            return data?.find(item => word === item.word)?.pos === choose ? prev + 1 : prev
        }, 0)
        setPercentage(prev => prev = ((score / data?.length)* 100).toFixed(0))
    }

    useEffect(() => {
        setSelectedIsCorrect(prev => prev = answer[click-1]?.isCorrect)
        calculateResult()
    } , [click])

	const tryAgain = () => {
        if (!isNaN(percentage)) {
            console.log(percentage)
            axios.post(`http://localhost:4001/score`, {score: percentage})
        }
        navigate('/');
		setClick(prev => (prev = 0));
		setAnswer(prev => (prev = []));
        setPercentage(0)
        setNext(prev => prev = true)

	};

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<QuestionPage
							data={data}
							click={click}
                            setClick={setClick}
							handleClick={handleClick}
                            answer={answer}
                            selectedIsCorrect={selectedIsCorrect}
                            next={next}
                            setNext={setNext}
						/>
					}
				/>
				<Route path='/score' element={<ScorePage percentage={percentage} tryAgain={tryAgain} />} />
			</Routes>
		</>
	);
}

export default App;