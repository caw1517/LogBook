import {useState} from 'react';
import axios from "axios";
export default function Login() {

    //Set Initial State
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    //Handle Login
    function submitLogin(e) {
        e.preventDefault()
        //Login
        if(userName === '' || password === '') {
            setError("Please enter your username and password")
        } else {
            axios.post("http://localhost:5126/api/Auth/login", {
                userName: userName,
                password: password,
            })
                .then(res => {
                    //Store token in local storage
                    localStorage.setItem('token', res.data);
                    //Redirect to home page
                    window.location.href = "/";
                }).catch(err => {
                setError(err.response.data);
            })
        }
    }
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" onChange={e => setUserName(e.target.value) } />
                        <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" onChange={e => setPassword(e.target.value)}/>
                        <label>Password</label>
                </div>

                {error ? <p className="error">{error}</p> : null}
                <button type="button" onClick={submitLogin} className="submit">Submit</button>
            </form>
        </div>
    )
}