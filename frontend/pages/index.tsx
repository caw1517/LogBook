import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchAircraft } from "../features/aircraftSlice";

//Components
import NavbarComp from './components/NavBar'
import AircraftPage from "./components/Aircraft/AircraftPage";
import LogBookPage from "./components/Logbook/LogBookPage";

export default function HomePage() {
  return (
    <div className={"mainContainer"}>
      <NavbarComp/>
      <LogBookPage/>
    </div>
  )
}
