import React from "react";


function Contact() {

    return (
      <>
          <div className="container-fluid mb-5"style={{"marginTop":"150px"}} >
            <div className="container">
                <div className="row  d-flex justify-content-around ">  
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0 " >
                        <img className="col-lg-10" src="images/Screenshot4.png"/>
                        <img className="col-lg-10 col-sm-8 mt-4" src="images/Screenshot5.png"/>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 p-0 m-0" >
                       <div className="sign container p-5">
                            <p className=" text-center " style={{"font-weight":"bold","fontSize":"25px" ,"letterSpacing":"2px"}}>CONTACT US</p>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Email<span className="text-danger">*</span></p>
                            <input placeholder="Enter Email" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Phone no<span className="text-danger">*</span></p>
                            <input placeholder="Enter Phone no" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Address<span className="text-danger">*</span></p>
                            <input placeholder="Enter Password" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Zip Code<span className="text-danger">*</span></p>
                            <input placeholder="Enter Password" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Country<span className="text-danger">*</span></p>
                            <input placeholder="Select Country" className="text-secondary p-2 rounded col-4"/>
                            <button className="col-12 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} >Send Masssage</button>
                           
                        </div>
                    </div>
                </div>
             </div>
            </div>
      </>
  
    )
  }
  
  export default Contact;