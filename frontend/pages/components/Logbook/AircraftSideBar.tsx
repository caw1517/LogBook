import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AircraftSideBar() {
    return (
        <div className={"sidebarContainer"}>
            <div className={"sidebarHeader"}>
                <h2>Aircraft</h2>
                <div className={"addAircraft"}>
                        <p>Add Aircraft</p>
                </div>
            </div>

            <div className="sidebarBody">
                <div className="aircraftContainer">
                </div>
            </div>

        </div>
    )
}