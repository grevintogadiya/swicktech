import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBed, faBath, faBuilding } from "@fortawesome/free-solid-svg-icons";

function Featured() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="text-center mb-4">
        <p className="text-success fw-bold">Our Properties</p>
        <h1>Featured Properties</h1>
      </div>

      <div className="row g-4">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <img
              src="https://preview.colorlib.com/theme/oakberry/images/work-1.jpg.webp"
              className="card-img-top img-fluid"
              alt="Property"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://preview.colorlib.com/theme/oakberry/images/person_1.jpg.webp"
                  alt="Agent"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mb-0 text-muted">John Dorf</p>
                <span className="ms-auto text-muted small">2 weeks ago</span>
              </div>
              <h5 className="card-title">Sunny Loft Property</h5>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-muted me-2" />
                <span className="text-muted small">New York</span>
              </div>
              <div className="d-flex justify-content-between text-muted mb-3">
                <span>
                  <FontAwesomeIcon icon={faBed} className="me-2" />3 Beds
                </span>
                <span>
                  <FontAwesomeIcon icon={faBath} className="me-2" />2 Baths
                </span>
                <span>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  1,878 sqft
                </span>
              </div>
              <button className="btn btn-success w-100">$300,000</button>
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <img
              src="https://preview.colorlib.com/theme/oakberry/images/work-1.jpg.webp"
              className="card-img-top img-fluid"
              alt="Property"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://preview.colorlib.com/theme/oakberry/images/person_1.jpg.webp"
                  alt="Agent"
                  className="rounded-circle me-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <p className="mb-0 text-muted">Jane Smith</p>
                <span className="ms-auto text-muted small">1 week ago</span>
              </div>
              <h5 className="card-title">Luxury Penthouse</h5>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-muted me-2" />
                <span className="text-muted small">Los Angeles</span>
              </div>
              <div className="d-flex justify-content-between text-muted mb-3">
                <span>
                  <FontAwesomeIcon icon={faBed} className="me-2" />4 Beds
                </span>
                <span>
                  <FontAwesomeIcon icon={faBath} className="me-2" />3 Baths
                </span>
                <span>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  2,400 sqft
                </span>
              </div>
              <button className="btn btn-success w-100">$850,000</button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Featured;
