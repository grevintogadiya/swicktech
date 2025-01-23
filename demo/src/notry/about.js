//  import "./about.css";

// function About() {
//   return (

//     <div className="container-fluid" style={{padding:"0px"}} >
//       <div className="main">
//         <div className="leftside">
//           <h1>
//             Notary Public &<br /> Legal Solutions
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
//             Veritatis cupiditate deserunt placeat necessitatibus a aliquam
//             <br />
//             corrupti nisi odio aliquid, accusamus.
//           </p>
//         </div>

//         <div className="form1">
//           <form class="book-form">
//             <h3 style={{ color: "black", textAlign: "center" }}>
//               Book an Appointment
//             </h3>
//             <div class="row align-items-center">
//               <div class="mb-3 col-md-12">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Name"
//                   required
//                 />
//               </div>

//               <div class="mb-3 col-md-12">
//                 <input
//                   type="email"
//                   class="form-control"
//                   placeholder="Email"
//                   required
//                 />
//               </div>

//               <div class="mb-3 col-md-12">
//                 <div class="form-control-wrap">
//                   <input
//                     type="text"
//                     id="cf-4"
//                     placeholder="Select Date"
//                     class="form-control datepicker px-3"
//                     required
//                   />
//                   <span class="icon icon-date_range"></span>
//                 </div>
//               </div>

//               <div class="col-md-12">
//                 <input
//                   type="submit"
//                   value="Book Appointment"
//                   class="btn btn-primary btn-block py-3"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
// );

// }

// export default About;


import "./about.css";

function About() {
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <div className="main">
        <div className="leftside">
          <h1>
            Notary Public &<br /> Legal Solutions
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Veritatis cupiditate deserunt placeat necessitatibus a aliquam
            <br />
            corrupti nisi odio aliquid, accusamus.
          </p>
        </div>

        <div className="form1">
          <form className="book-form">
            <h3 className="text-center" style={{ color: "black" }}>
              Book an Appointment
            </h3>
            <div className="row">
              <div className="mb-3 col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="mb-3 col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3 col-12">
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="cf-4"
                    placeholder="Select Date"
                    className="form-control datepicker px-3"
                    required
                  />
                  <span className="icon icon-date_range"></span>
                </div>
              </div>

              <div className="col-12">
                <input
                  type="submit"
                  value="Book Appointment"
                  className="btn btn-primary btn-block py-3"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
