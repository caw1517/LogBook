//React
import { useState } from 'react';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../slices/userSlice";

export default function Login() {

    const dispatch = useDispatch();

    //Redux State
    const error = useSelector((state) => state.user.error);

    //Set Initial State
    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" onChange={(e) => {
                        setUser({...user, userName: e.target.value})
                    }}/>
                        <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" onChange={(e) => {
                        setUser({...user, password: e.target.value})
                    }}/>
                        <label>Password</label>
                </div>

                {error ? <p className="error">{error}</p> : null}
                <button type="button" onClick={(e) => {
                    dispatch(loginUser(user));
                }
                } className="submit">Submit</button>
            </form>
        </div>
    )
}