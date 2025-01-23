import "./Customer.css";

function Customer() {
  return (
    <div className="container-fluid pt-5" style={{ background: "#f8f9fa" }}>
      <div className="text-center">
        <h3>Happy Customers</h3>
      </div>
      <div className="row pt-5">
      
        <div className="col-md-4 mb-4">
          <div className="box">
            <div className="box-content">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_2.jpg"
                alt="Lina Gold"
              />
              <div className="box-text">
                <h6>Lina Gold</h6>
                <p>Owner, Ford</p>
                <div className="textmiddle">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="col-md-4 mb-4">
          <div className="box">
            <div className="box-content">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_1.jpg"
                alt="Mike Fisher"
              />
              <div className="box-text">
                <h6>Mike Fisher</h6>
                <p>Owner, Ford</p>
                <div className="textmiddle">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="col-md-4 mb-4">
          <div className="box">
            <div className="box-content">
              <img
                src="https://preview.colorlib.com/theme/notary/images/person_3.jpg"
                alt="Sheen Yu"
              />
              <div className="box-text">
                <h6>Sheen Yu</h6>
                <p>Owner, Ford</p>
                <div className="textmiddle">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
