//CSS
import '../css/Index.scss';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//Components
import Aircraft from "./aircraft/Aircraft";

//React
import { useState, useEffect } from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const endpoint = "http://localhost:5126/api/Aircraft";

export default function AircraftSideBar() {
    const [aircraft, setAircraft] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [sidebarActive, setSidebarActive] = useState(false);

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(result => {
                    setLoaded(true);
                setAircraft(result);
            },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <div className={`sidebarContainer ${sidebarActive ? "activeSidebar" : "inactive"}`}>
            <div className="showSidebar">
                <FontAwesomeIcon size={"2xl"} icon={faArrowRight} onClick={() => setSidebarActive(!sidebarActive)} />
            </div>
            <div className={"sidebarHeader"}>
                <h2>Aircraft</h2>
                <div className={"addAircraft"}>
                    <p>Add Aircraft</p>
                </div>
            </div>

            <div className="sidebarBody">
                {aircraft.map((aircraft) => (
                    <Aircraft key={aircraft.id} aircraft={aircraft} />
                ))}
            </div>
        </div>
    )
}