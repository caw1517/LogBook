import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WebNavbar from "./WebNavbar";
import MobileNavbar from "./MobileNavbar";

//Function to check if the screen is mobile or not
function getWindowsWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function NewNavbar({ loggedIn }) {
    //State for window size
    const [windowWidth, setWindowWidth] = useState(getWindowsWidth());

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowsWidth());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //Render based on mobile or not
    if(windowWidth > 768) {
        return <WebNavbar loggedIn={loggedIn} />
    } else {
        return (
            <MobileNavbar loggedIn={loggedIn} />
        )
    }
}