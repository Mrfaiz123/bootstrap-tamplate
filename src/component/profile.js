import React from "react";

function Profile() {

    return (
      <>
           <div className="container-fluid" >
            <div className="container">
                <div className=" row d-flex justify-content-between ">  
                    <div className="col-lg-12 col-md-12 col-sm-12 p-0 m-0 ">
                        <h1 className="text-center" style={{"fontWeight":"bold","marginTop":"100px"}}>User Profile</h1>
                        <div className="mt-5 d-flex justify-content-around">
                            <div className="col-lg-2 col-md-3 col-sm-3 d-flex justify-content-evenly ">
                                <img style={{"fontSize":"40px","height":"185px"}} src="/images/Screenshot.png"/>
                                <div className="d-flex flex-column" style={{"fontWeight":"bold"}}>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div className="col-lg-2  col-md-3 col-sm-3 d-flex justify-content-evenly">
                                <img style={{"fontSize":"40px","height":"185px"}} src="/images/Screenshot.png"/>
                                <div className="d-flex flex-column" style={{"fontWeight":"bold"}}>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div className="col-lg-2  col-md-3 col-sm-3 d-flex justify-content-evenly">
                                <img style={{"fontSize":"40px","height":"185px"}} src="/images/Screenshot.png"/>
                                <div className="d-flex flex-column" style={{"fontWeight":"bold"}}>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div className="col-lg-2  col-md-3 col-sm-3 d-flex justify-content-evenly">
                                <img style={{"fontSize":"40px","height":"185px"}} src="/images/Screenshot.png"/>
                                <div className="d-flex flex-column" style={{"fontWeight":"bold"}}>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </div>
      </>
  
    );
  }
  
  export default Profile;