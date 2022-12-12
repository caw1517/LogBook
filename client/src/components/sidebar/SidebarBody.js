//FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";

//Components
import Aircraft from "../aircraft/Aircraft";
import AddAircraft from "../aircraft/AddAircraft";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../slices/sidebarSlice";
import { toggleAddAircraft } from "../../slices/aircraftSlice";

function SidebarBody() {
    //Set up redux State that will be used
    const dispatch = useDispatch();
    const sidebarActive = useSelector((state) => state.sidebar.sidebarActive);
    const aircraft = useSelector((state) => state.aircraft.aircraft);
    const addAircraftActive = useSelector((state) => state.aircraft.addAircraftActive);
    const userId = useSelector((state) => state.user.userId);
    const aircraftError = useSelector((state) => state.aircraft.error);

    return (
        <>
            {addAircraftActive ? <AddAircraft userId={userId} /> : null}

            <div className={sidebarActive ? "sidebar sidebarActive" : "sidebar"} >
                <div className="sidebarHeader">
                    <FontAwesomeIcon className={"sidebarClose"} icon={faX}  onClick={() => {
                        dispatch(closeSidebar());}
                    } />
                    <h2>Aircraft</h2>
                </div>

                <button className="addAircraftButton" onClick={() => {
                    dispatch(toggleAddAircraft());
                }}>Add Aircraft</button>

                <div className="sidebarBody">
                    {aircraftError ? <div>Error: {aircraftError}</div> : aircraft.map(a => (
                        <Aircraft key={a.id} a={a}
                                    userId={userId}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default SidebarBody;