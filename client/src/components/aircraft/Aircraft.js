import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Aircraft({ aircraft }) {
    const [aircraftUser, setAircraftUser] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5126/api/LogBook/AircraftRoutes/${aircraft.id}`)
            .then(res => res.json())
            .then(result => {
                    setLoaded(true);
                setAircraftUser(result);
            },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <div className="aircraftContainer">

            <div className="acInfo">
                <p>Type: {aircraft.aircraftType}</p>
                <p>Reg: {aircraft.serialNumber}</p>
            </div>
            <div className="acRouteInfo">
                <p>Routes: {aircraftUser.length}</p>

                <div className="acActions">
                    <FontAwesomeIcon className="aircraftIcon" icon={faTrash} />
                    <FontAwesomeIcon  icon={faPlusSquare} className="aircraftIcon" />
                </div>
            </div>
        </div>
    )
}