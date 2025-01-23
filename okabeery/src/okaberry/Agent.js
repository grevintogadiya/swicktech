import "./Agent.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Agent() {
  return (
    <div className=" back contanier-fluid">
      <div className="agent">
    
    
          <div
            className="textagent"
            style={{ paddingTop: "100px", paddingLeft: "100px" }}
          >
            <p style={{ color: "green" }}>Meets Our Agents</p>

            <h4 className="text-white" style={{ fontSize: "50px" }}>
              Our Agents
            </h4>
        </div>
    

        <div className="boxagent">
          <div className="agentbox1">
            <div className="agentbox">
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/team-1.jpg.webp"
                style={{ height: "340px", width: "auto" }}
                alt=""
              />
            </div>

            <div className="agenttext">
              <h5 style={{fontSize:"20px"}}>Listing 10 Properties</ h5>
              <h4 style={{fontSize:"23px"}}>Mike Bochs</h4>

              <div className=" logo d-flex" style={{ fontSize: "20px" }}>
                <div>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>

          <div className="agentbox1">
            <div className="agentbox">
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/team-1.jpg.webp"
                style={{ height: "340px", width: "auto" }}
                alt=""
              />
            </div>

            <div className="agenttext">
            <h5 style={{fontSize:"20px"}}>Listing 10 Properties</ h5>
            <h4 style={{fontSize:"23px"}}>Mike Bochs</h4>

              <div className=" logo d-flex" style={{ fontSize: "20px" }}>
                <div>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>


          <div className="agentbox1">
            <div className="agentbox">
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/team-1.jpg.webp"
                style={{ height: "340px", width: "auto" }}
                alt=""
              />
            </div>

            <div className="agenttext">
            <h5 style={{fontSize:"20px"}}>Listing 10 Properties</ h5>
            <h4 style={{fontSize:"23px"}}>Mike Bochs</h4>

              <div className=" logo d-flex" style={{ fontSize: "20px" }}>
                <div>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div> 

           <div className="agentbox1">
            <div className="agentbox">
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/team-1.jpg.webp"
                style={{ height: "340px", width: "auto" }}
                alt=""
              />
            </div>

            <div className="agenttext">
            <h5 style={{fontSize:"20px"}}>Listing 10 Properties</ h5>
            <h4 style={{fontSize:"23px"}}>Mike Bochs</h4>

              <div className=" logo d-flex" style={{ fontSize: "20px" }}>
                <div>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
                <div className="pl-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div> 
        </div>
        </div>
    </div>
  );
}

export default Agent;
