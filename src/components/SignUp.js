import React from "react";
import { useHistory } from 'react-router-dom';
import useFormSubmission from './CustomHooks';


export default function SignUp() {

    const history = useHistory();
    
    const signUpDone = () => {
        //Lets update adminlist
        if(inputs.isAdmin) {
            let currentAdminList = JSON.parse(localStorage.getItem('adminList'));
            const nextIndex = currentAdminList.length + 1;
            currentAdminList.push({id: nextIndex, email: inputs.email, password: inputs.password, isAdmin : true});
            localStorage.setItem('adminList', JSON.stringify(currentAdminList));
            console.log(currentAdminList)
        } else { //update userList
            let currentUserList = JSON.parse(localStorage.getItem('userList'));
            const nextIndex = currentUserList.length + 1;
            currentUserList.push({id: nextIndex, email: inputs.email, password: inputs.password});
            localStorage.setItem('userList', JSON.stringify(currentUserList));
        }
        
        history.push({pathname: "/sign-in", params: inputs});
    };
    const {inputs, handleInputChange, handleSubmit} = useFormSubmission(signUpDone);



    console.log(JSON.parse(localStorage.getItem('adminList')))
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" name="firstName" onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" name="lastName" onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleInputChange}/>
            </div>
            
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" name="isAdmin" onChange={handleInputChange}/>
                <label className="custom-control-label" for="defaultUnchecked">Sign up as Admin</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered? <a href="/sign-in">sign in</a>
            </p>
        </form>
    );
    
}