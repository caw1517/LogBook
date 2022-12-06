import './css/Index.scss';
import NewNavbar from "./components/Navbar/Navbar";

//Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import LogBook from "./pages/LogBook";

import jwtDecode from "jwt-decode";

import {useState, useEffect} from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    const[loggedIn, setLoggedIn] = useState(false);

    //Verify token
    function verifyToken() {
        const token = localStorage.getItem('token');
        if(token) {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if(decoded.exp < currentTime) {
                localStorage.removeItem('token');
                setLoggedIn(false);
            } else {
                setLoggedIn(true);
            }
        }
    }

    useEffect(() => {
        verifyToken();
    }, []);


  return (
            <BrowserRouter>
                <div className="App">
                    <NewNavbar loggedIn={loggedIn} />
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={loggedIn ? <LogBook/> : <Home/>} />
                </Routes>
                </div>
            </BrowserRouter>

  );
}

export default App;
