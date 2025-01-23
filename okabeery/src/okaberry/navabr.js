import "./Navbar.css";


function Navbar() {
  return (
    <div className="main container-fluid" style={{ padding: "0px" }}>
      <div className="header1 px-3 py-2 d-flex align-items-center justify-content-between">
        <div className="header2 text-white">
          <h6 className="m-0">
            Oakberry <br /> Real Estate Agency
          </h6>
        </div>
        <div className="header3 d-flex align-items-center">
          <nav className="d-none d-md-flex">
            <h6 className="mx-2">Home</h6>
            <h6 className="mx-2">About</h6>
            <h6 className="mx-2">Properties</h6>
            <h6 className="mx-2">Agent</h6>
            <h6 className="mx-2">Blog</h6>
            <h6 className="mx-2">Contact</h6>
          </nav>
          <button
            className="btn btn-success btn-sm ml-md-3"
            style={{ height: "35px" }}
          >
            Submit A Property
          </button>
        </div>
      </div>
      <div className="middle text-center">
        <h5 style={{ fontSize: "60px" }}>Your Property Is Our Priority</h5>
        <p className="pt-4">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in
          <br />
          which roasted parts of sentences fly into your mouth.
        </p>
        <button className="btn btn-success mt-4">Learn More</button>
      </div>

      <div className="text-center pt-4">
        <button className="btn btn-outline-dark mr-2"
          style={{ width: "170px" }}
        >
          Buy Properties
        </button>
        <button
          className="btn btn-success"
          style={{ width: "170px" }}
        >
          Rent Properties
        </button>
      </div>
    </div>
  );
}

export default Navbar;
