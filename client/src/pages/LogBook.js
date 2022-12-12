import AircraftSideBar from "../components/sidebar/Sidebar";
import LogbookCard from "../components/logbooks/LogbookCard";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchAircraftByUser } from "../slices/aircraftSlice";
import {useEffect} from "react";

export default function LogBook() {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.userId);

    useEffect(() => {
        if(userId){
            dispatch(fetchAircraftByUser(userId));
        }
    }, [dispatch, userId]);


    return (
        <div>
            <AircraftSideBar userId={userId}/>

            <div className="cardSection">
                <LogbookCard />
                <LogbookCard />
                <LogbookCard />
            </div>
        </div>
    )
}