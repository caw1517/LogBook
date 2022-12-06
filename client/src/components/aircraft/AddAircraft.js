import '../../css/Logbook.scss';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useState} from "react";

export default function AddAircraft({ userId, setAddAircraftActive }) {
    const [serialNumber, setSerialNumber] = useState("");
    const [aircraftType, setAircraftType] = useState("");

    return(
        <>
            <div className="modalOverlay"></div>
            <div className="addAircraft">
                <div className="closeModal">
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <h3>Add Aircraft</h3>
                <form action="submit">
                    <label htmlFor="serialNumber">Serial Number</label>
                    <input type="text" name="serialNumber" id="serialNumber" value={serialNumber} onChange={e => setSerialNumber(e.target.value)} />

                    <label htmlFor="aircraftType">Aircraft Type</label>
                    <input type="text" name="aircraftType" id="aircraftType" value={aircraftType} onChange={e => setAircraftType(e.target.value)} />

                    <button type="submit">Add Aircraft</button>
                </form>
            </div>
        </>
    )
}