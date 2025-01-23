import "./Book.css";

function Book() {
  return (
    <div className="container-fluid pt-5">
      <div className="row justify-content-center align-items-center g-4">
       
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="limage d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
            <img
              src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg"
              className="img-fluid mb-3 mb-lg-0"
              alt="Attorney"
              style={{
                height: "400px",
                width: "100%",
                maxWidth: "320px",
              }}
            />
            <img
              src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
              className="img-fluid ms-lg-4"
              alt="Attorney"
              style={{
                height: "400px",
                width: "100%",
                maxWidth: "320px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-6 rtext text-center text-lg-start">
          <h3>
            We Provide Highly Reliable <br /> & Effective Legal Solutions
          </h3>
          <p className="pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Repudiandae, explicabo iste a labore id est quas, <br />
            doloremque veritatis! Provident odit pariatur dolorem <br />
            quisquam, voluptatibus voluptates optio accusamus, vel <br />
            quasi quidem!
          </p>
          <button className="btn btn-warning mt-3" style={{ borderRadius: "5px" }}>
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
