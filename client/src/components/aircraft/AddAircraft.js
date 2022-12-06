import '../../css/Logbook.scss';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useEffect, useState} from "react";
import axios from "axios";

export default function AddAircraft({ userId, setAddAircraftActive, fetchAircraft, method, setEditAircraft, a}) {
    const [serialNumber, setSerialNumber] = useState("");
    const [aircraftType, setAircraftType] = useState("");
    const [error, setError] = useState(null);

/*    function updateAircraft(e) {
        e.preventDefault();
        if (serialNumber === "" || aircraftType === "") {
            setError("Please fill out all fields.");
        } else {
            axios.put(`http://localhost:5126/api/Aircraft/${a.id}`, {
                serialNumber: serialNumber,
                aircraftType: aircraftType,
                userId: userId
            },  {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(() => {
                setEditAircraft(false);
                fetchAircraft();
            }).catch(err => {
                setError(err);
            })
        }
    }*/

    function addAircraft(e) {
        e.preventDefault();
        if(serialNumber === '' || aircraftType === '') {
            setError("Please enter a serial number and aircraft type");
        } else {
            axios.post("http://localhost:5126/api/Aircraft", {
                serialNumber: serialNumber,
                aircraftType: aircraftType,
                userId: userId

            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                setAddAircraftActive(false);
                fetchAircraft();
            }).catch(err => {
                setError(err.response.data);
            })
        }
    }

    return(
        <>
            <div className="modalOverlay" onClick={() => {
                    setAddAircraftActive(false);
            }}></div>
            <div className="addAircraft">
                <div className="closeModal">
                    <FontAwesomeIcon className={"icon"} icon={faXmark} onClick={() => {
                            setAddAircraftActive(false);

                    }}/>
                </div>

                <h3>Add Aircraft</h3>

                <form action="submit" onSubmit={addAircraft}>
                    <div className="formGroup">
                        <label htmlFor="serialNumber">Serial Number</label>
                        <input type="text" name="serialNumber" placeholder={"N123AB"} onChange={e => setSerialNumber(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="aircraftType">Aircraft Type</label>
                        <input type="text" name="aircraftType" placeholder={"B737 / Boeing 737"} onChange={e => setAircraftType(e.target.value)} />
                    </div>
                    <button type="submit">Add Aircraft</button>
                </form>
            </div>
        </>
    )
}