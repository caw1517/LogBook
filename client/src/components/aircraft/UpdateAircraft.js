import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";

export default function UpdateAircraft({setEditAircraftActive, a, userId, fetchAircraft}) {
    const [serialNumber, setSerialNumber] = useState(a.serialNumber);
    const [aircraftType, setAircraftType] = useState(a.aircraftType);
    const [error, setError] = useState(null);

    function editAircraft(e) {
        e.preventDefault();
        if(serialNumber === "" || aircraftType === "") {
            setError("Please fill out all fields.");
        } else {
            axios.put(`http://localhost:5126/api/Aircraft/${a.id}`, {
                serialNumber: serialNumber,
                aircraftType: aircraftType,
                userId: userId
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(() => {
                setEditAircraftActive(false);
                fetchAircraft();
            })
        }
    }

    return (
        <>
            <div className="modalOverlay" onClick={() => {
                setEditAircraftActive(false);
            }}></div>
            <div className="addAircraft">
                <div className="closeModal">
                    <FontAwesomeIcon className={"icon"} icon={faXmark} onClick={() => {
                        setEditAircraftActive(false);

                    }}/>
                </div>

                <h3>Edit Aircraft</h3>

                <form action="submit" onSubmit={editAircraft}>
                    <div className="formGroup">
                        <label htmlFor="serialNumber">Serial Number</label>
                        <input type="text" name="serialNumber"
                               defaultValue={serialNumber}
                               placeholder={"N123AB"}
                               onChange={(e) => {
                                   setSerialNumber(e.target.value);
                               }}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="aircraftType">Aircraft Type</label>
                        <input type="text" name="aircraftType"
                               defaultValue={aircraftType}
                               placeholder={"B737 / Boeing 737"}
                               onChange={(e) => {
                                      setAircraftType(e.target.value);
                               }}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}