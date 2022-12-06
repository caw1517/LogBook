import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import Aircraft from "../aircraft/Aircraft";

export default function SidebarBody({sidebarActive, handleSidebarClose, aircraft, fetchAircraft, error}) {
    return (
        <div className={sidebarActive ? "sidebar sidebarActive" : "sidebar"} >
            <div className="sidebarHeader">
                <FontAwesomeIcon className={"sidebarClose"} icon={faX}  onClick={handleSidebarClose} />
                <h2>Aircraft</h2>
            </div>

            <button className="addAircraftButton">Add Aircraft</button>

            <div className="sidebarBody">
                {error ? <div>Error: {error}</div> : aircraft.map(a => (
                    <Aircraft key={a.id} a={a} fetchAircraft={fetchAircraft} />
                ))}
            </div>
        </div>
    )
}