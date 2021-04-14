import React from "react";
import { useHistory } from 'react-router-dom';

export default function ProgressMessage(props) {
	const history = useHistory();

	const handleRetake = (e) => {
		e.preventDefault();
		history.push({pathname: "/user-panel"})
	}

	return(
		<>
		<h3 className="progress">{props.location.params}</h3>
		<button type="submit" className="btn btn-primary btn-block" onClick={handleRetake}>Re-Take</button>
		</>
	);
}