import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Page1() {
 const navigate=useNavigate()
 const next=()=>{
  navigate('/page2')
}
const back=()=>{
  navigate('/')
}


    return (
      <>

        <div className="container-fluid border pb-3 " >

        <div className="col-lg-12 col-md-12 col-sm-12" style={{"position":"relative"}}>
              <div className="div text-center text-white">
                <h1 className="mt-4">Step 1: Basic Information</h1>
                <p className="mt-2">Let’s get to know you, please fill out some basic information <br/> about yourself.</p>
              </div>
            </div>


          <div className="container d-flex justify-content-center " style={{"position":"relative","marginTop":"160px"}}>
            <div className="sign bg-white row col-lg-10 col-md-10 col-sm-10 pb-3 d-flex justify-content-center border ">  
                <div className=" col-lg-10  d-flex flex-column justify-content-center" >
                  <img src="images/Screenshot6.png"  />
                  <div className="d-flex  justify-content-between ">
                    <div className="col-lg-5 ">
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>First Name<span className="text-danger">*</span></p>
                          <input placeholder="Wade" className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Date of Birth<span className="text-danger">*</span></p>
                          <input type={"date"} className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Gender<span className="text-danger">*</span></p>
                          
                          <div className=" d-flex justify-content-center align-items-center">
                            <p className="mt-2"style={{"marginLeft":"100px"}}>Female</p>
                            <input type={"checkbox"} className="text-secondary p-2 w-100"/>
                          </div>
                          <div className=" d-flex justify-content-center align-items-center">
                            <p className="mt-2"style={{"marginLeft":"100px"}}>Male</p>
                            <input  type={"checkbox"} className="text-secondary p-2 w-100"/>
                          </div>
                    </div>
                    <div className="col-lg-5 ">
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Last Name<span className="text-danger">*</span></p>
                          <input placeholder="Warren" className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Degree Level<span className="text-danger">*</span></p>
                          <input placeholder="O-Level"  className="text-secondary p-2 w-100"/>
                          <button className="col-12 mt-5 rounded text-primary py-2 border border-primary"style={{ "border":"none","font-weight":"bold",}} onClick={back} >Previus</button>

                    </div>
                  </div>

                    <button className="col-4 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} onClick={next} >Send Masssage</button>
                </div>
            </div>
          </div>
        </div>
      </>
  
    );
  }
  
  export default Page1;