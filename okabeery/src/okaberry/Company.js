import "./Compnay.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Company() {
  return (
    <div className="contanier-fluid pt-5">
      <div className="about d-flex justify-content-around">
        <div className="mainimage">
          <img
            src="https://preview.colorlib.com/theme/oakberry/images/about.jpg.webp"
            style={{ height: "700px", width: "auto" }}
            alt=""
          />
        </div>

        <div className="textride">
          <div className="right">
            <h6 style={{color:"green"}}>About Us</h6>

            <h2 style={{ fontSize: "50px" }}>
              Oakberry A Real Estate <br />
              Company
            </h2>

            <p style={{ paddingTop: "20px" }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the <br /> blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large <br /> language ocean.
            </p>
          </div>
          <div className="d-flex justify-content-between pt-5">
            <div>
              <h4>50</h4>
              <p style={{color:"green"}}>Years of Experienced</p>
            </div>
            <div>
              <h4>210K+</h4>
              <p style={{color:"green"}}>Total Properties</p>
            </div>
            <div>
              <h4>450+</h4>
              <p style={{color:"green"}}>Qualified Realtors</p>
            </div>
            <div>
              <h4>100</h4>
              <p style={{color:"green"}}>Total Branches</p>
            </div>
          </div>

          <div>
            <img src="https://preview.colorlib.com/theme/oakberry/images/about-1.jpg.webp"
             style={{ height: "310px", width: "750px" }}
             alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
