import "./client.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Client() {
  return (
    <div className="contanier-fluid pt-5 pb-5" style={{backgroundColor:"#f3f5f1"}}>
      <div className="textclient">
        <div className="text-center">
          <p style={{ color: "green" }}>Testimonial</p>

          <h1 style={{ fontSize: "50px" }}>Clients We Help</h1>
        </div>

        <div className="boxclient d-flex">
          <div className="clientbox">
            <div className="c1">
              <p>
                Far far away, behind the word <br />
                mountains, far from the countries <br />
                Vokalia and Consonantia, there live the <br /> blind texts.
              </p>
            </div>

            <div className="d-flex">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/oakberry/images/person_1.jpg"
                  style={{
                    height: "90px",
                    width: "90px",
                    marginTop: "15px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>

              <div className="text-center pt-4 pl-2">
                <h4>Roger Scott</h4>

                <h6 style={{ color: "green",paddingLeft:"10px" }}>Marketing Manager</h6>
              </div>
            </div>
          </div>


          <div className="clientbox">
            <div className="c1">
              <p>
                Far far away, behind the word <br />
                mountains, far from the countries <br />
                Vokalia and Consonantia, there live the <br /> blind texts.
              </p>
            </div>

            <div className="d-flex">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/oakberry/images/person_1.jpg"
                  style={{
                    height: "90px",
                    width: "90px",
                    marginTop: "15px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>

              <div className="text-center pt-4 pl-2">
                <h4>Roger Scott</h4>

                <h6 style={{ color: "green",paddingLeft:"10px" }}>Marketing Manager</h6>
              </div>
            </div>
          </div>



          <div className="clientbox">
            <div className="c1">
              <p>
                Far far away, behind the word <br />
                mountains, far from the countries <br />
                Vokalia and Consonantia, there live the <br /> blind texts.
              </p>
            </div>

            <div className="d-flex">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/oakberry/images/person_1.jpg"
                  style={{
                    height: "90px",
                    width: "90px",
                    borderRadius: "50%",
                    marginTop: "15px",
                  }}
                  alt=""
                />
              </div>

              <div className="text-center pt-4 pl-2">
                <h4>Roger Scott</h4>

                <h6 style={{ color: "green",paddingLeft:"10px"}}>Marketing Manager</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
