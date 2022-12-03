//CSS
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Card} from "react-bootstrap";

//Components
import Aircraft from "./aircraft/Aircraft";

//React
import { useState, useEffect } from "react";

const aircraftEndpoint = "http://localhost:5126/api/Aircraft";

export default function AircraftSideBar() {
    const [aircraft, setAircraft] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [sidebarActive, setSidebarActive] = useState(false);

    const fetchAircraft = () => {
        fetch(aircraftEndpoint)
            .then(res => res.json())
            .then(result => {
                    setLoaded(true);
                    setAircraft(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        fetchAircraft();
    }, []);

    const handleClose = () => setSidebarActive(false);

    return (
        <>
            <div className="showSidebar">
                <FontAwesomeIcon size={"2xl"} icon={faArrowRight} onClick={() => setSidebarActive(!sidebarActive)} />
            </div>

            <Offcanvas show={sidebarActive} onHide={handleClose}>
                <Offcanvas.Header className="sidebarHeader" closeButton>
                    <Offcanvas.Title>Aircraft</Offcanvas.Title>

                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Button className="sidebarHeader" variant="secondary">Add Aircraft</Button>
                    {loaded ? (aircraft.map(a => (
                        <Aircraft key={a.id} a={a} />
                    ))) : (<p>Loading...</p>)}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}