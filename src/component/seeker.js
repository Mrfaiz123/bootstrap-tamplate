import React from "react";

function Seeker() {

    return (
      <>
        <div className="container-fluid "style={{"marginTop":"150px"}} >
            <div className="container">
                <div className="row d-flex justify-content-around ">  
                    <div className="col-lg-5 col-md-6 col-sm-12 p-0 m-0">
                        <img className="col-lg-11" src="/images/Screenshot1.png"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 p-0 m-0 ">
                        <h2>Job Seekers</h2>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"50px"}}></div>
                        <p className="text-secondary mt-2">Apply for a job with one click after <br/> completing your profile</p>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"20px"}}></div>
                        <p className="text-secondary mt-2">Free CV templates- Many to choose <br/> from</p>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"20px"}}></div>
                        <p className="text-secondary mt-2">Free exports to pdf</p>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"20px"}}></div>
                        <p className="text-secondary mt-2">Free profile and access to jobs</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Seeker;