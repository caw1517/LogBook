import { useState, useEffect } from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

//Bootstrap

import { Card, Row, Col, Button } from "react-bootstrap";

export default function Aircraft({ a }) {
    const [aircraftLogbooks, setaircraftLogbooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    const deleteAircraft = (id) => {
        fetch(`http://localhost:5126/api/Aircraft/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            window.location.reload();
        });
    }

    useEffect(() => {
        fetch(`http://localhost:5126/api/LogBook/AircraftRoutes/${a.id}`)
            .then(res => res.json())
            .then(result => {
                setLoaded(true);
                setaircraftLogbooks(result);
            },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <>
            <Card className="card-click">
                <Card.Header>
                    <Card.Title>Aircraft: {a.serialNumber}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Card.Subtitle>Model: {a.aircraftType}</Card.Subtitle>
                        <Card.Text>Routes Flown: {aircraftLogbooks.length}</Card.Text>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Button variant="secondary" >Edit</Button>
                        </Col>
                        <Col>
                            <Button variant="danger">Delete</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}