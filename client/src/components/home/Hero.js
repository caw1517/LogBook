import {Link} from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
    return(
        <>
            <div className="heroOverlay">
                <div className="heroCol">
                    <h1>Log your flights</h1>
                    <h2>Designed for flight simulation use only.</h2>
                    <Link to={"/demo"} className={"btn"}>Have a look at our demo
                        <FontAwesomeIcon className={"icon"} icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </>
    )
}