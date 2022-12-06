import {Link} from "react-router-dom";

export default function WebNavbar({ loggedIn }) {
    return (
        <div className="navbar">
            <div className="navbarRow">

                <div className="navbarCol">
                    <Link className={"link navLogo"} to={"/"}>AviatorLogs</Link>
                </div>

                <div className="navbarCol">
                    <Link className={"link"} to={loggedIn ? "/logbook" : "/"}>Home</Link>
                    {loggedIn ? null : <Link className={"link"} to="/demo">Demo</Link>}
                    <Link className={"link"} to={"/about"}>About</Link>
                </div>

                <div className="navbarCol">
                    <div className="userNav">
                        {loggedIn ?<Link className={"link userNavAction"} to="/logout">Logout</Link> : <Link className={"link userNavAction"} to="/login">Login</Link>}
                        {loggedIn ? null : <Link className={"link userNavAction"} to="/register">Register</Link>}
                    </div>
                </div>

            </div>
        </div>
    )
}