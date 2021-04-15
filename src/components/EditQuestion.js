import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import useFormSubmission from './CustomHooks';

export default function EditQuestion(props) {
	const data = props.location.params;
	const history = useHistory();
	// const [currentList, setCurrentQuizList] = useState(JSON.parse(localStorage.getItem('quizList')));

	const editDone = () => {
		console.log(inputs);
		let currentQuizList = JSON.parse(localStorage.getItem('quizList'));
	    // currentQuizList.find(curr => curr.id===quiz.id)
	    const index = currentQuizList.findIndex(curr => curr.id === data.id);
	    if (index > -1) {
		  // currentQuizList.splice(index, 1);
		  if(inputs.question)
		  	currentQuizList[index].question = inputs.question;
		  if(inputs.answer)
		  	currentQuizList[index].answer = inputs.answer;
		  if(inputs.A)
		  	currentQuizList[index].A = inputs.A;
		  if(inputs.B)
		  	currentQuizList[index].B = inputs.B;
		  if(inputs.C)
		  	currentQuizList[index].C = inputs.C;
		  if(inputs.D)
		  	currentQuizList[index].D = inputs.D;
		  localStorage.setItem('quizList', JSON.stringify(currentQuizList));
		  // setCurrentQuizList(JSON.parse(localStorage.getItem('quizList')));
		  console.log(JSON.parse(localStorage.getItem('quizList')))
		  history.push({pathname: "/admin-panel", params: inputs})
		}
	}
	const {inputs, handleInputChange, handleSubmit} = useFormSubmission(editDone);

	return(
		<form onSubmit={handleSubmit}>
            <h3 className="title">Edit Question</h3>
            <hr/>

            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" placeholder={data.question} name="question" onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" placeholder={data.answer} name="answer" onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <label>Options</label>
                <input type="text" className="form-control" placeholder={data.A} name="A" onChange={handleInputChange}/>
                <input type="text" className="form-control" placeholder={data.B} name="B" onChange={handleInputChange}/>
                <input type="text" className="form-control" placeholder={data.C} name="C" onChange={handleInputChange}/>
                <input type="text" className="form-control" placeholder={data.D} name="D" onChange={handleInputChange}/>
            </div>
            
            
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Already registered? <a href="/sign-in">sign in</a>
            </p>
        </form>
	);
		
}