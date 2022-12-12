import { useState } from "react";

import { useDispatch } from "react-redux";
import { deleteAircraft } from "../../slices/aircraftSlice";

export default function Aircraft({ a }) {

    const dispatch = useDispatch();
    const [aircraftLogbooks, setaircraftLogbooks] = useState([]);
    const [editAircraftActive, setEditAircraftActive] = useState(false);


    return (
        <>
            {/*{editAircraftActive ? <UpdateAircraft
                setEditAircraftActive={setEditAircraftActive}
                a={a}
                userId={userId}
                fetchAircraft={fetchAircraft}
            /> : null}*/}

            <div className={"cardMain"}>
                <div className="cardHeader">
                    <h3>Aircraft: {a.serialNumber}</h3>
                </div>

                <div className="cardBody">
                    <div className="cardRow">
                        <p>Model: {a.aircraftType}</p>
                        <p>Routes Flown: {aircraftLogbooks.length}</p>
                    </div>

                    <div className="cardRow">
                        <button className={"cardButton editButton"} onClick={() => setEditAircraftActive(true)}>Edit</button>
                        <button className={"cardButton deleteButton"} onClick={() => {
                            dispatch(deleteAircraft(a.id));}
                        } >Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}