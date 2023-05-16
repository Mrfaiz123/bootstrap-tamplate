import React from "react";
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {

    return (
      <>
         <div className="container-fluid p-4" style={{"position":"relative","overflow":"hidden" }} >
            <div className="border col-lg-6 col-md-6" style={{"marginTop":"259px","marginLeft":"640px","position":"absolute","height":"683px","width":"683px","borderRadius":"50%","backgroundColor":"#514898","z-index":"-2"}}></div>
            <div className="container">
                <div className=" row d-flex justify-content-between "> 
                    <div className="col-lg-5 col-md-6 col-sm-12 p-0 " style={{"marginTop":"123px"}}>
                        <h1 style={{"font-weight":"bold","fontSize":"45px"}}>Find your <span style={{"color":"#514898"}}> Blockchain Dev </span>  job Today</h1>
                        <p className="mt-3  ">Discover the leading companies in the blockchain <br/> industry and find job opportunities.</p>
                        <button className="col-6 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} >Login Now</button>
                    </div>
                    <div className="sign rounded col-lg-5 col-md-5 col-sm-12 p-0 mt-4 pb-4"style={{"backgroundColor":"white"}}>
                        <div className="container d-flex justify-content-between mt-4">
                            <p style={{"font-weight":"bold","fontSize":"25px" ,"letterSpacing":"2px"}}>Sign UP</p>
                            <div className=" d-flex align-items-center justify-content-between">
                                <button className="text-white rounded py-1 px-2" style={{"border":"none","backgroundColor":"#514898"}}>Job seeker</button>
                                <button className="text-secondary rounded py-1 px-2" style={{"border":"none"}}>Employer</button>
                            </div>
                        </div>
                        <div className="container">
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Name<span className="text-danger">*</span></p>
                            <input placeholder="Enter Name" className="p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Email<span className="text-danger">*</span></p>
                            <input placeholder="Enter Email" className="p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Phone no<span className="text-danger">*</span></p>
                            <input placeholder="Enter Phone no" className="p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Password<span className="text-danger">*</span></p>
                            <input placeholder="Enter Password" className=" p-2 rounded col-12"/>
                            <Link to="page1">
                                <button className="col-12 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} >Login Now</button>
                            </Link>
                            <p className="text-center text-secondary mt-3"> Or Sign up with </p>
                            <div className=" d-flex mt-2">
                                <FcGoogle className="p-2 rounded " style={{"fontSize":"45px","marginLeft":"148px"}}/>
                                <BsFacebook className="p-2 rounded " style={{"fontSize":"45px","marginLeft":"50px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
      </>
  
    );
  }
  
  export default Hero;