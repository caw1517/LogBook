import './css/Index.scss';
import NavbarComp from "./components/Navbar";
import AircraftSideBar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
        <NavbarComp />
        <AircraftSideBar/>
    </div>
  );
}

export default App;
