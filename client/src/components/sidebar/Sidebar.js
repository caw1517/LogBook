//CSS
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

//Components
import SidebarBody from "./SidebarBody";

//React
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

export default function AircraftSideBar() {
    const [aircraft, setAircraft] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userIdLoaded, setUserIdLoaded] = useState(false);

    //Sidebar
    const [sidebarActive, setSidebarActive] = useState(false);
    const handleSidebarClose = () => setSidebarActive(false);

    let config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }

    //Get Id from token
    async function getIdFromToken() {
        try {
            //Call API to get claims of user ID and store it
            const id = await axios.get("http://localhost:5126/api/Auth/tokenFromId", config);
            setUserId(id.data);
            setUserIdLoaded(true);
        } catch (error) {
            setError(error)
            setUserIdLoaded(true);
        }
    }

    //Fetch Aircraft
    const fetchAircraft = async () => {
        try {
            //Call API to get aircraft based off users Id
            const res = await axios.get(`http://localhost:5126/api/Aircraft/user/${userId}`, config);
            setAircraft(res.data);
            setLoaded(true);
        } catch (err)
        {
            setError(err);
        }
    }

    useEffect(() => {
        getIdFromToken()
    }, [userIdLoaded]);


    return (
        <>
            <div className={sidebarActive ? "showSidebarHide" : "showSidebar"}>
                <FontAwesomeIcon size={"2xl"} icon={faArrowRight} onClick={() => {
                    setSidebarActive(!sidebarActive)
                    fetchAircraft();
                }}/>
            </div>

            {sidebarActive ? (<div className="overlay" onClick={handleSidebarClose}></div>) : null}

            {/*Set Page to load if user Id is not ready since most data is based off that*/}
            {userIdLoaded ? null : (
                <div className="loadingData">
                    <h3>Loading...</h3>
                </div>
            )}
            <SidebarBody
                sidebarActive={sidebarActive}
                handleSidebarClose={handleSidebarClose}
                aircraft={aircraft}
                fetchAircraft={fetchAircraft}
                error={error}
                userId={userId}
            />
        </>
    )
}