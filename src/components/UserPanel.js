import React, {useState, useEffect} from "react";
import Question from './Question';

import { useHistory } from 'react-router-dom';

export default function UserPanel() {
	let currentQuizList = JSON.parse(localStorage.getItem('quizList')); 
	const [progress, setProgress] = useState("");
	const history = useHistory();

	useEffect (() => {
		if(progress && progress.length > 0) {
			history.push({pathname: "/progress-message", params: progress});
		}
	});

	const submitQuiz = (e) => {
		e.preventDefault();
		currentQuizList = JSON.parse(localStorage.getItem('quizList'));
		const solvedList = currentQuizList.filter(quiz => quiz.answer === quiz.answerAttempted);
		setProgress("You have solved " + solvedList.length + " of " + currentQuizList.length + " questions.");
		console.log(progress)
		
	}

	return(

		<>
			<h3 className="title">Take Quiz</h3><hr/>
			{
				currentQuizList.map((quiz, index) => 
					<>
						<Question key={quiz.id} quiz = {quiz} index = {index} />
						<hr/>
					</>
				)
			}
			<button type="submit" className="btn btn-primary btn-block" onClick={submitQuiz}>Submit</button>
		</>

	);
}