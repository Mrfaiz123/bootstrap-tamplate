import React from "react";
import img from "../images/logo.png"

function Nav() {

    return (
      <>
          <div className="container-fluid p-4" style={{"position":"sticky","backgroundColor":"white", "top": "0%" , "left":"0%", "z-index":"10" }}>
            <div className="container ">
                <div className=" row d-flex justify-content-between ">  
                    <div className="col-lg-2 col-md-2 col-sm-12 p-0 m-0 ">
                        <img src={img} style={{"cursor": "pointer" }} />
                    </div>
                    <div className=" col-lg-6 col-md-7 p-0 m-0">
                        <ul className=" d-flex justify-content-around align-items-center  h-100 list-unstyled ">
                            <li  style={{"cursor": "pointer","color":"#514898","font-weight":"bold" }}> Option 1</li>
                            <li className="" style={{"cursor": "pointer","color":"#514898","font-weight":"bold" }}>Option 2</li>
                            <li className=" rounded py-2 px-3 border border-primary" style={{"font-weight":"bold","cursor": "pointer","color":"#514898",}}>Create Profile</li>
                            <li className="text-white py-2 px-3 rounded" style={{"font-weight":"bold","cursor": "pointer","background-color":"#514898"}}>Employer</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
          
      </>
  
    );
  }
  
  export default Nav;