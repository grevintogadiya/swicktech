import "./Fotter.css";

function Footer() {
  return (
    <footer>
      <div className="fotter container-fluid">
        <div
          className="fotterr row pt-5 justify-content-center"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {/* About Us Section */}
          <div className="f1 col-md-2 mb-4">
            <h6 className="maintext text-white">About Us</h6>
            <p className="text-white">
              Far far away, behind the word <br />
              mountains, far from the <br /> countries Vokalia and <br />
              Consonantia, there live the <br />
              blind texts.
            </p>
          </div>

          <div className="f2 col-md-2 mb-4">
            <h6 className="text-white">Quick Links</h6>
            <p className="text-white">About Us</p>
            <p className="text-white">Testimonials</p>
            <p className="text-white">Terms of Service</p>
            <p className="text-white">Privacy</p>
            <p className="text-white">Contact Us</p>
          </div>

          <div className="f3 col-md-2 mb-4">
            <h6 className="text-white">Resources</h6>
            <p className="text-white">About Us</p>
            <p className="text-white">Testimonials</p>
            <p className="text-white">Terms of Service</p>
            <p className="text-white">Privacy</p>
            <p className="text-white">Contact Us</p>
          </div>


          <div className="f4 col-md-2 mb-4">
            <h6 className="text-white">Support</h6>
            <p className="text-white">About Us</p>
            <p className="text-white">Testimonials</p>
            <p className="text-white">Terms of Service</p>
            <p className="text-white">Privacy</p>
            <p className="text-white">Contact Us</p>
          </div>

     
          <div className="f5 col-md-2 mb-4">
            <h6 className="text-white">Company</h6>
            <p className="text-white">About Us</p>
            <p className="text-white">Testimonials</p>
            <p className="text-white">Terms of Service</p>
            <p className="text-white">Privacy</p>
            <p className="text-white">Contact Us</p>
          </div>
        </div>

    
        <div className="fotterend">
          <h6 className="text-white text-center pt-3">
            Copyright ©2024 All rights reserved | This template is made with by
            Colorlib.
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
