import "./Pages.css";
import Locations from "../components/Location/locations";

function LocationPage() {
  return (
    <div className="container">
      <div className="container-cards">
        <Locations />
      </div>
    </div>
  );
}

export default LocationPage;
