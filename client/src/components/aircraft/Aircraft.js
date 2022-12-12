import { useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteAircraft, fetchAircraftByUser } from "../../slices/aircraftSlice";

export default function Aircraft({ a }) {

    //Redux dispatch and state
    const dispatch = useDispatch();
    const [aircraftLogbooks, setaircraftLogbooks] = useState([]);
    const [editAircraftActive, setEditAircraftActive] = useState(false);
    const userId = useSelector((state) => state.user.userId);

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
                        <button className={"cardButton deleteButton"} onClick={async () => {
                            //On click, delete aircraft
                            await dispatch(deleteAircraft(a.id))
                                .then(() => {
                                    //Re-fetch aircraft to update component
                                    dispatch(fetchAircraftByUser(userId));
                                })
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}