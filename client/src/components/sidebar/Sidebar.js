//CSS
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

//Components
import SidebarBody from "./SidebarBody";

//React
import { useState, useEffect } from "react";

export default function AircraftSideBar() {
    const [aircraft, setAircraft] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    //Sidebar
    const [sidebarActive, setSidebarActive] = useState(false);
    const handleSidebarClose = () => setSidebarActive(false);

    let config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }

    //Fetch Aircraft
    const fetchAircraft = async () => {
        try {
            const res = await axios.get("http://localhost:5126/api/Aircraft", config);
            setAircraft(res.data);
            setLoaded(true);
        } catch (err)
        {
            setError(err);
        }
    }


    useEffect(() => {
        fetchAircraft();
    }, []);


    return (
        <>
            <div className={sidebarActive ? "showSidebarHide" : "showSidebar"}>
                <FontAwesomeIcon size={"2xl"} icon={faArrowRight} onClick={() => setSidebarActive(!sidebarActive)} />
            </div>
            {sidebarActive ? (<div className="overlay" onClick={handleSidebarClose}></div>) : null}
            {loaded ? <SidebarBody
                sidebarActive={sidebarActive}
                handleSidebarClose={handleSidebarClose}
                aircraft={aircraft}
                fetchAircraft={fetchAircraft}
                error={error} /> : <p>Loading...</p>}
        </>
    )
}