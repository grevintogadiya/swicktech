// import "./Fotterupper.css";
// function Fotterupper() {
//   return (
//     <div className="container-fluid" style={{ padding: "0px" }}>
//       <div className="mainimage">
//         <div className="first">
//           <img
//             src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
//             style={{ height: "400px" }}
//             alt=""
//           ></img>
//         </div>
//         <div className="secound">
//           <h4>
//             We Have Legal <br />
//             Solutions
//           </h4>

//           <p>
//             Lorem ipsum dolor sit amet, consectetur <br />
//             adipisicing elit. Quisquam reprehenderit perspiciatis <br /> iste
//             culpa consequuntur consequatur <br /> eum, voluptatum, quod deserunt
//             maiores?
//           </p>

//           <p>
//             Modi perferendis ipsa ducimus consequuntur <br />
//             excepturi autem, numquam facere aperiam iste <br />
//             nam molestias provident consectetur molestiae <br />
//             voluptatibus ipsum. Fugiat, quas.
//           </p>

//           <p>Aperiam iste nam molestias</p>

//           <p>Modi perferendis ipsa</p>

//           <p>Perspic iste culpa</p>
//         </div>

//         <div className="third">
//           <input
//             type="email"
//             class="form-control"
//             placeholder="How to dowload and register?"
//             required
//             style={{ width: "328px", margin: "0px" }}
//           />
//           <p className="color" style={{ backgroundColor: "#f8f9fa",borderRadius:"15px",width:"328px"}}>
//             Anim pariatur cliche reprehenderit, enim <br /> eiusmod high life
//             accusamus terry <br />
//             richardson ad squid. 3 wolf moon officia
//             <br /> aute, non cupidatat skateboard dolor
//             <br /> brunch. Food truck quinoa nesciunt
//             <br />
//             laborum eiusmod. Brunch 3 wolf moon <br />
//             tempor, sunt aliqua put a bird on it squid
//             <br />
//             single-origin coffee nulla assumenda
//             <br /> shoreditch et.
//           </p>

//           <input
//             type="email"
//             class="form-control"
//             placeholder="How to create paypal account?"
//             required
//             style={{ width: "328px", margin: "0px"}}
//           />

// <input
//             type="email"
//             class="form-control"
//             placeholder="How to link your paypal and bank account?"
//             required
//             style={{ width: "328px", marginTop: "10px"}}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Fotterupper;

import "./Fotterupper.css";

function Fotterupper() {
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <div className="mainimage d-flex flex-wrap justify-content-between pt-5">
  
        <div className="first col-md-5 mb-4">
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
            className="img-fluid"
            alt="Legal Solutions"
            style={{ height: "400px" }}
          />
        </div>

       
        <div className="secound col-md-5 mb-4">
          <h4>
            We Have Legal <br />
            Solutions
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipisicing elit. Quisquam reprehenderit perspiciatis <br />
            iste culpa consequuntur consequatur <br />
            eum, voluptatum, quod deserunt maiores?
          </p>

          <p>
            Modi perferendis ipsa ducimus consequuntur <br />
            excepturi autem, numquam facere aperiam iste <br />
            nam molestias provident consectetur molestiae <br />
            voluptatibus ipsum. Fugiat, quas.
          </p>

          <p>Aperiam iste nam molestias</p>
          <p>Modi perferendis ipsa</p>
          <p>Perspic iste culpa</p>
        </div>

       
        <div className="third col-md-5 mb-4">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="How to download and register?"
            required
          />
          <p
            className="color"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            Anim pariatur cliche reprehenderit, enim <br />
            eiusmod high life accusamus terry <br />
            richardson ad squid. 3 wolf moon officia
            <br /> aute, non cupidatat skateboard dolor
            <br /> brunch. Food truck quinoa nesciunt
            <br />
            laborum eiusmod. Brunch 3 wolf moon <br />
            tempor, sunt aliqua put a bird on it squid
            <br />
            single-origin coffee nulla assumenda
            <br /> shoreditch et.
          </p>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="How to create PayPal account?"
            required
          />
          <input
            type="email"
            className="form-control"
            placeholder="How to link your PayPal and bank account?"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Fotterupper;


