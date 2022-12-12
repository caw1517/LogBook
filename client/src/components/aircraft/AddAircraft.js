//CSS and Font Awesome
import '../../css/Logbook.scss';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//React
import { useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { addNewAircraft, fetchAircraftByUser , toggleAddAircraft, setAircraftError } from "../../slices/aircraftSlice";

export default function AddAircraft({ setAddAircraftActive }) {

    //Redux dispatch and state
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.userId);
    const addAircraftError = useSelector((state) => state.aircraft.addAircraftError);

    //Initial local state to store the aircraft object that will be sent to the backend
    const [aircraft, setAircraft] = useState({
        serialNumber: '',
        aircraftType: '',
        userId: userId
    });

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

    //Function to handle the form submission
    async function handleSubmit(e) {
        //Prevent default form submission and page refresh
        e.preventDefault();
        //If the serial number or aircraft type is empty, set an error message
        if (aircraft.serialNumber === "" || aircraft.aircraftType === "") {
            dispatch(setAircraftError("Please fill out all fields."));
        } else {
            //Else dispatch the addNewAircraft action to the aircraftSlice
            await dispatch(addNewAircraft(aircraft))
                .then(() => {
                    //Then re-fetch the aircraft to update component
                    dispatch(fetchAircraftByUser(userId));
                    //Close the add aircraft form
                    dispatch(toggleAddAircraft());
                    //Clear any error that may have existed
                    dispatch(setAircraftError(null));
                })
        }
    }

    return(
        <>
            <div className="modalOverlay" onClick={() => {
                dispatch(toggleAddAircraft());
            }}></div>
            <div className="addAircraft">
                <div className="closeModal">
                    <FontAwesomeIcon className={"icon"} icon={faXmark} onClick={() => {
                        dispatch(toggleAddAircraft());
                    }}/>
                </div>

                <h3>Add Aircraft</h3>

                <form>
                    <div className="formGroup">
                        <label htmlFor="serialNumber">Serial Number</label>
                        <input type="text" name="serialNumber" placeholder={"N123AB"} onChange={(e) => {
                            setAircraft({
                                ...aircraft, serialNumber: e.target.value
                            });
                        }}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="aircraftType">Aircraft Type</label>
                        <input type="text" name="aircraftType" placeholder={"B737 / Boeing 737"} onChange={(e) => {
                            setAircraft({
                                ...aircraft, aircraftType: e.target.value
                            });
                        }}/>
                        {addAircraftError ? <p className="error">{addAircraftError}</p> : null}
                    </div>
                    <button type="submit" onClick={handleSubmit}>Add Aircraft</button>
                </form>
            </div>
        </>
    )
}