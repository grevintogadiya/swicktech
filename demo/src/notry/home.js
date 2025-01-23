import "./home.css";

function Home() {
  return (
    <div className="container-fluid bg-light">
      <div className="main2 py-5">
        <div className="text-center">
          <h3>
            <span>
              <b>Practice</b>
            </span>{" "}
            Area
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="boxmain">
        <div className="row g-4 justify-content-center">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-4 border-0 shadow">
              <h5>Bankruptcy Law</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                laboriosam!
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-4 border-0 shadow">
              <h5>Family Law</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                laboriosam!
              </p>
            </div>
          </div>

   
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card p-4 border-0 shadow">
              <h5>Corporate Law</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                laboriosam!
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 custom-margin">
            <div className="card p-4 border-0 shadow">
              <h5>Civil Rights</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                laboriosam!
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 custom-margin">
            <div className="card p-4 border-0 shadow">
              <h5>Criminal Defense</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                laboriosam!
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 custom-margin">
            <div className="card p-4 border-0 shadow">
              <h5>Intellectual Property</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                laboriosam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
