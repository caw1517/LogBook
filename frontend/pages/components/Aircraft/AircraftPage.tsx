import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchAircraft, selectAllAircraft, selectAircraftStatus } from "../../../features/aircraftSlice";
import {useAppDispatch} from "../../../store";

export default function AircraftPage() {
    const dispatch = useAppDispatch();
    const aircraft = useSelector(selectAllAircraft)
    const status = useSelector(selectAircraftStatus)

    useEffect(() => {
        dispatch(fetchAircraft());
    }, [dispatch])

    console.log(aircraft)

    return (
        <div>
            <h1>Aircraft</h1>
        </div>
    )
}