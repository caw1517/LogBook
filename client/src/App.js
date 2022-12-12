//CSS
import './css/Index.scss';

//Pages and Components
import Login from "./pages/Login";
import Home from "./pages/Home";
import LogBook from "./pages/LogBook";
import NewNavbar from "./components/Navbar/Navbar";

//React
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {getUserId, verifyAuth} from "./slices/userSlice";

function App() {

    //Setup Redux state and dispatch
    const dispatch = useDispatch();
    const isAuthed = useSelector((state) => state.user.isAuthed);
    const userToken = useSelector((state) => state.user.token);

    //Verify Authentication on initial load
    useEffect(() => {
        dispatch(verifyAuth());

        //If user is authenticated, get their user ID
        if(isAuthed){
            dispatch(getUserId(userToken));
        }
    }, [dispatch, isAuthed]);

  return (
            <BrowserRouter>
                <div className="App">
                    <NewNavbar loggedIn={isAuthed} />
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={isAuthed ? <LogBook/> : <Home/>} />
                </Routes>
                </div>
            </BrowserRouter>

  );
}

export default App;
