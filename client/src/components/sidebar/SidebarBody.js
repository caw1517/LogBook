import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import Aircraft from "../aircraft/Aircraft";
import AddAircraft from "../aircraft/AddAircraft";

import {useState} from "react";

export default function SidebarBody({sidebarActive, handleSidebarClose, aircraft, fetchAircraft, error, userId}) {
    const [addAircraftActive, setAddAircraftActive] = useState(false);

    return (
        <>
            {addAircraftActive ? <AddAircraft userId={userId} setAddAircraftActive={setAddAircraftActive} fetchAircraft={fetchAircraft}/> : null}

            <div className={sidebarActive ? "sidebar sidebarActive" : "sidebar"} >
                <div className="sidebarHeader">
                    <FontAwesomeIcon className={"sidebarClose"} icon={faX}  onClick={handleSidebarClose} />
                    <h2>Aircraft</h2>
                </div>

                <button className="addAircraftButton" onClick={() => {
                    setAddAircraftActive(true);
                }}>Add Aircraft</button>

                <div className="sidebarBody">
                    {error ? <div>Error: {error}</div> : aircraft.map(a => (
                        <Aircraft key={a.id} a={a} fetchAircraft={fetchAircraft} />
                    ))}
                </div>
            </div>
        </>
    )
}