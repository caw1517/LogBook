import './css/Index.scss';
import AircraftSideBar from "./components/Sidebar";
import NewNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <NewNavbar />
        <AircraftSideBar/>
    </div>
  );
}

export default App;
