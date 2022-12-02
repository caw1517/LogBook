import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchAircraft, selectAllAircraft, selectAircraftStatus } from "../../../features/aircraftSlice";
import {useAppDispatch} from "../../../store";

//Comps
import AircraftSideBar from "./AircraftSideBar";

export default function LogBookPage() {
    const dispatch = useAppDispatch();
    const aircraft = useSelector(selectAllAircraft)
    const status = useSelector(selectAircraftStatus)

    useEffect(() => {
        dispatch(fetchAircraft());
    }, [dispatch])

    console.log(aircraft)

    return (
        <div className={"logBookPageContainer"}>
            <AircraftSideBar/>
        </div>
    )
}