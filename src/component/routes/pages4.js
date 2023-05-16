import React from "react";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate=useNavigate()
  const next=()=>{
   navigate('/page5')
 }
  const back=()=>{
   navigate('/page3')
 }


    return (
      <>

        <div className="container-fluid border pb-3 " >

        <div className="col-lg-12 col-md-12 col-sm-12" style={{"position":"relative"}}>
              <div className="div text-center text-white">
                <h1 className="mt-4">Step 4: Complete your Profile</h1>
                <p className="mt-2">You are just few steps away from you professional CV. How <br/> would you like to start?</p>
              </div>
            </div>


          <div className="container d-flex justify-content-center " style={{"position":"relative","marginTop":"160px"}}>
            <div className="sign bg-white row col-lg-10 col-md-10 col-sm-10 pb-3 d-flex justify-content-center border ">  
                <div className=" col-lg-10  d-flex flex-column justify-content-center" >
                  <img src="images/Screenshot9.png"  />
                  <div className="d-flex  justify-content-between">
                    <div className="col-lg-5 ">
                      <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>I already have a CV/Resume</p>
                      <button className="col-12 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} >Upload File</button>
                    </div>
                    <div className="col-lg-5 ">
                        <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Create profile from scratch</p>
                        <button className="col-12 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} onClick={next} >Continue</button>
                    </div>
                  </div>
                  <button className="col-12 mt-5 rounded text-primary py-2 border border-primary"style={{ "border":"none","font-weight":"bold",}} onClick={back} >Previus</button>   
                </div>
            </div>
          </div>
        </div>
      </>
  
    );
  }
  
  export default Page4;