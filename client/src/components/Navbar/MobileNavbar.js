import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//React
import {Link} from "react-router-dom";
import {useState} from "react";

export default function MobileNavbar({loggedIn}) {
    //Navbar open state
    const [open, setOpen] = useState(false);

    //Handle Open and closing of navbar
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <FontAwesomeIcon className={open ? "hide" : "hamburgerMenu"} icon={faBars} onClick={handleOpen} />
            <div className={open ? "overlay" : ""}></div>

            {open ? (<div className="navbarMobile">

                <FontAwesomeIcon icon={faX} className={open ? "closeMenu" : "hide"} onClick={handleClose} />

                <div className="navbarMobileHead">
                    <div className="linkBox">
                        <Link className={"link navLogo"} to={"/"} onClick={handleClose} >AviatorLogs</Link>
                    </div>
                </div>

                <div className="linkBox">
                    <Link className={"link"} to={loggedIn ? "/logbook" : "/"} onClick={handleClose}>Home</Link>
                </div>

                <div className="linkBox">
                    {loggedIn ? null : <Link className={"link"} to="/demo" onClick={handleClose}>Demo</Link>}
                </div>

                <div className="linkBox">
                    <Link className={"link"} to={"/about"} onClick={handleClose}>About</Link>
                </div>


                <div className="linkBox">
                    {loggedIn ?<Link className={"link userNavAction"} to="/logout" onClick={handleClose}>Logout</Link> : <Link className={"link userNavAction"} to="/login" onClick={handleClose}>Login</Link>}
                </div>

                <div className="linkBox">
                    {loggedIn ? null : <Link className={"link userNavAction"} to="/register" onClick={handleClose}>Register</Link>}
                </div>

            </div>) : null}

        </>
    )
}