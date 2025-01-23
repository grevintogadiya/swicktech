import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faHouse,
  faBuilding,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="second">
      <div className="main1 text-center py-5">
        <p>Oakberry Categories</p>
        <h1>
          Explore Our Categories & <br />
          Places
        </h1>
      </div>

      <div className="container">
        <div className="row text-center pt-5">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="box">
              <span style={{ fontSize: "70px" }}>
                <FontAwesomeIcon icon={faLandmark} />
              </span>
              <h6 className="pt-2" style={{ fontSize: "25px" }}>
                Land
              </h6>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="box">
              <span style={{ fontSize: "70px" }}>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <h6 className="pt-2" style={{ fontSize: "25px" }}>
                Residential
              </h6>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="box">
              <span style={{ fontSize: "70px" }}>
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              <h6 className="pt-2" style={{ fontSize: "25px" }}>
                Commercial
              </h6>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="box">
              <span style={{ fontSize: "70px" }}>
                <FontAwesomeIcon icon={faIndustry} />
              </span>
              <h6 className="pt-2" style={{ fontSize: "25px" }}>
                Industrial
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container bottom2">
        <div className="row">
          <div className="col-md-4">
            <LocationSection locations={["New York", "London", "Chicago", "Illinois"]} properties={[200, 100, 422, 422]} />
          </div>
          <div className="col-md-4">
            <LocationSection locations={["California", "Tennessee", "Texas", "North Carolina"]} properties={[100, 200, 200, 200]} />
          </div>
          <div className="col-md-4">
            <LocationSection locations={["Florida", "Charleston", "Orlando", "Atlanta"]} properties={[422, 200, 200, 200]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationSection({ locations, properties }) {
  return (
    <div className="text-center">
      {locations.map((location, index) => (
        <div key={index}>
          <h6>{location}</h6>
          <button
            className="btn btn-light mb-3"
            style={{ width: "150px" }}
          >
            {properties[index]} properties
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
