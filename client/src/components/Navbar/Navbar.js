import { Link } from "react-router-dom";

import handleLogout from "../../services/ServiceFunctions";

export default function NewNavbar({ loggedIn }) {

    function handleLogout() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <>
            <div className="navbar">
                <div className="navbarRow">

                    <div className={"navbarCol"}></div>

                    <div className="navbarCol">
                        <Link className={"link navLogo"} to={"/"}>AviatorLogs</Link>
                    </div>

                    <div className="navbarCol">
                        {loggedIn ?
                            <Link className={"link userNavAction"} to="/logout" onClick={handleLogout}>Logout</Link> :
                            <Link className={"link userNavAction"} to="/login">Sign In</Link>}
                    </div>

                </div>
            </div>
        </>
    )
}