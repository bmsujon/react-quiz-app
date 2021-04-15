import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminPanel from "./components/AdminPanel";
import UserPanel from "./components/UserPanel";
import ProgressMessage from "./components/ProgressMessage";

function App() {

  let adminList = [{id: 1, email: "admin@gmail.com", password: "123456", isAdmin : true}];
  localStorage.setItem('adminList', JSON.stringify(adminList));

  let userList = [{id: 1, email: "user@gmail.com", password: "123456"}];
  localStorage.setItem('userList', JSON.stringify(userList));

  let quizList = [
    {
      id: 1, 
      question:"What's the name of the  capital of Bangladesh?", 
      A: "Dhaka", 
      B: "Jessore", 
      C: "Sylhet", 
      D: "Rajshahi", 
      answer: "Dhaka",
      answerAttempted: ""
    },
    {
      id: 2, 
      question:"What's the name of the  capital of India?", 
      A: "Dhaka", 
      B: "Jessore", 
      C: "Delhi", 
      D: "Rajshahi", 
      answer: "Delhi",
      answerAttempted: ""
    },
    {
      id: 3, 
      question:"What's the name of the  capital of Pakisthan?", 
      A: "Dhaka", 
      B: "Jessore", 
      C: "Islamabad", 
      D: "Rajshahi", 
      answer: "Islamabad",
      answerAttempted: ""
    }
  ];

  localStorage.setItem('quizList', JSON.stringify(quizList));
  
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Quiz App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              {<li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/react-quiz-app' component={SignUp} />
            <Route path="/sign-in" component={Login} />
            <Route path="/admin-panel" component={AdminPanel} />
            <Route path="/user-panel" component={UserPanel} />
            <Route path="/progress-message" component={ProgressMessage} />
            {<Route path="/sign-up" component={SignUp} />}
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;