import React from "react";


export default function Question(props, index) {
	console.log(props)

	let quiz = props.quiz;
	const isAdmin = localStorage.getItem("isAdmin");
	
	const onChangeValue = (event) => {
	    console.log(event.target.value);
	    let currentQuizList = JSON.parse(localStorage.getItem('quizList'));
	    currentQuizList.find(curr => curr.id===quiz.id).answerAttempted = event.target.value;
	    localStorage.setItem('quizList', JSON.stringify(currentQuizList));
	    // console.log(JSON.parse(localStorage.getItem('quizList')) || []);
	}



	return(
		<div className="container-fluid col-md-12">
			<div className="row-fluid">
				<h3>{props.index + 1}. {quiz.question}</h3>
			</div>
			<div className="form-group">
				<div onChange={onChangeValue}>
			        <input type="radio" value={quiz.A} name={"answer" + quiz.id} /> {quiz.A}
			        <input type="radio" value={quiz.B} name={"answer" + quiz.id} /> {quiz.B}
			        <input type="radio" value={quiz.C} name={"answer" + quiz.id} /> {quiz.C}
			        <input type="radio" value={quiz.D} name={"answer" + quiz.id} /> {quiz.D}
			     </div>
		     </div>
		     {isAdmin?
		     	<div className="text-center">
			     	<h3>Answer: {quiz.answer}</h3>
			     	
				</div>
		     	:null
		     }
	     </div>
		
	);
}