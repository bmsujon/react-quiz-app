import React, {useState} from "react";
import Question from './Question';
import { useHistory } from 'react-router-dom';

export default function AdminPanel(params, index) {
	const history = useHistory();
	let currentQuizList = JSON.parse(localStorage.getItem('quizList'));

	const [currentList, setCurrentQuizList] = useState(currentQuizList);

	const deleteQuestion = (e, quiz) => {
		e.preventDefault();
		let currentQuizList = JSON.parse(localStorage.getItem('quizList'));
	    // currentQuizList.find(curr => curr.id===quiz.id)
	    const index = currentQuizList.findIndex(curr => curr.id === quiz.id);
	    if (index > -1) {
		  currentQuizList.splice(index, 1);
		  console.log("deleted")
		  localStorage.setItem('quizList', JSON.stringify(currentQuizList));
		  setCurrentQuizList(JSON.parse(localStorage.getItem('quizList')));
		}
		
		console.log(currentQuizList.length);
	}

	const editQuestion = (e, quiz) => {
		e.preventDefault();
		// console.log("deleteQuestion")
		history.push({pathname: "/edit-question", params: quiz})
	}

	// console.log(currentQuizList)
	return(
		<div>
			<h3 className="title">Edit or Delete Question</h3><hr/>
			{
				currentList.map((quiz, index) => 
					<>
					<Question key={quiz.id} quiz = {quiz} index = {index} onClick={deleteQuestion} />
					<div className="text-center">
						<button type="button" className="btn btn-danger btn-sm" onClick={e => deleteQuestion(e, quiz)}>Delete</button>
						<button type="button" className="btn btn-primary btn-sm" onClick={e => editQuestion(e, quiz)}>Edit</button>
					</div>
					<hr/>
					</>
				)
			}
		</div>
	);
}