import React from "react";

function Employer() {

  return (
    <>
      <div className="container-fluid "style={{"marginTop":"150px"}} >
            <div className="container">
                <div className="row d-flex justify-content-around ">  
                    <div className="col-lg-5 col-md-6 col-sm-12 p-0 m-0">
                        <h2>Employers</h2>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"50px"}}></div>
                        <p className="text-secondary mt-2">Free job posting</p>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"20px"}}></div>
                        <p className="text-secondary mt-2">View Candidates before deciding <br/> from which are good fit</p>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"20px"}}></div>
                        <p className="text-secondary mt-2">One format for profile / resume makes it easier to see all the <br/> key points for evaluating a candidate within seconds</p>
                        <div style={{"backgroundColor":"#514898","height":"3px","width":"60px","marginTop":"20px"}}></div>
                        <p className="text-secondary mt-2">Free profile and access to jobs</p>

                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12   p-0 m-0 ">
                        <img className="col-lg-11" src="/images/Screenshot2.png"/>
                    </div>
                </div>
            </div>
        </div>
        
         
      
    </>

  );
}

export default Employer;