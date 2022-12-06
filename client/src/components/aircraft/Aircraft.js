import { useState, useEffect } from "react";

export default function Aircraft({ a, fetchAircraft }) {
    const [aircraftLogbooks, setaircraftLogbooks] = useState([]);

    async function deleteAircraft() {
        await fetch(`http://localhost:5126/api/Aircraft/${a.id}`, {method: "DELETE"});
        fetchAircraft();
    }

    return (
        <>
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
                        <button className={"cardButton editButton"}>Edit</button>
                        <button className={"cardButton deleteButton"} onClick={deleteAircraft} >Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}