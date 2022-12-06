import { useState, useEffect } from "react";
import UpdateAircraft from "./UpdateAircraft";
import axios from "axios";

export default function Aircraft({ a, fetchAircraft, userId, }) {
    const [aircraftLogbooks, setaircraftLogbooks] = useState([]);
    const [editAircraftActive, setEditAircraftActive] = useState(false);

    //Delete Aircraft
    function deleteAircraft() {
      axios.delete(`http://localhost:5126/api/Aircraft/${a.id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
        fetchAircraft();
    }

    return (
        <>
            {editAircraftActive ? <UpdateAircraft
                setEditAircraftActive={setEditAircraftActive}
                a={a}
                userId={userId}
                fetchAircraft={fetchAircraft}
            /> : null}

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
                        <button className={"cardButton deleteButton"} onClick={deleteAircraft} >Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}