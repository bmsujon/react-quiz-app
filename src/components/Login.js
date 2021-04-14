
import React, {useState} from "react";
import useFormSubmission from './CustomHooks';
import { useHistory } from 'react-router-dom';


export default function Login(props) {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");
    const loginCalled = () => {
        if(inputs.isAdmin) {
            // validate admin user
            let currentAdminList = JSON.parse(localStorage.getItem('adminList'));
            console.log(currentAdminList)
            if(currentAdminList.find(admin => admin.email === inputs.email && admin.password === inputs.password)) {
                console.log("clear to login")
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("isAdmin", true);
                localStorage.removeItem('isUser');
                history.push({pathname: "/admin-panel"});

            } else {
                setErrorMessage("Invalid admin user email or password");
                console.log("Invalid admin user email or password");
            }
        } else {
            //Validate user
            let currentUserList = JSON.parse(localStorage.getItem('userList'));
            console.log(currentUserList)
            if(currentUserList.find(user => user.email === inputs.email && user.password === inputs.password)) {
                console.log("clear to login")
                localStorage.setItem("loggedIn", true);
                localStorage.removeItem('isAdmin');
                localStorage.setItem("isUser", true);
                history.push({pathname: "/user-panel"});
            } else {
                setErrorMessage("Invalid user email or password");
                console.log("Invalid user email or password");
            }
        }
    }
    const {inputs, handleInputChange, handleSubmit} = useFormSubmission(loginCalled);
    

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

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
                <label className="custom-control-label" for="defaultUnchecked">Log as Admin</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            {errorMessage && errorMessage.length>0 ? <p className="error">{errorMessage}</p> : <p>Login Successful</p>}
        </form>
    );
    
}
