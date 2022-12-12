//FontAwesome
import {faPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import SidebarBody from "./SidebarBody";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar, toggleSidebar } from "../../slices/sidebarSlice";

export default function AircraftSideBar() {

    //Set up redux actions and init state
    const dispatch = useDispatch();
    const sidebarActive = useSelector((state) => state.sidebar.sidebarActive);

    return (
        <>
            {/*Controls if the open or close button is displayed based on sidebar status*/}
            <div className={sidebarActive ? "showSidebarHide" : "showSidebar"}>
                <FontAwesomeIcon size={"2xl"} icon={faPlane} onClick={() => {
                    dispatch(toggleSidebar());
                }}/>
            </div>

            {/*Closes sidebar if user clicks off the sidebar*/}
            {sidebarActive ? (<div className="overlay" onClick={() => {
                dispatch(closeSidebar());}
            }></div>) : null}

            {/*Pass Sidebar status to body*/}
            <SidebarBody />
        </>
    )
}