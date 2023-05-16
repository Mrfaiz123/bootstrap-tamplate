import React from "react";


function Footer() {

    return (
      <>
        <div className="container-fluid mb-5"style={{"marginTop":"150px"}} >
            <div className="container">
                <div className="row  d-flex justify-content-center border ">  
                  <div className="col-lg-2 col-md-3 col-sm-5 p-0 m-0" >
                    <h4 style={{"fontWeight":"bold"}}>Services</h4>
                    <p className="text-secondary mt-4">LIst Item 1</p>
                    <p className="text-secondary">LIst Item 2</p>
                    <p className="text-secondary">LIst Item 3</p>
                    <p className="text-secondary">LIst Item 4</p>
                    <p className="text-secondary">LIst Item 5</p>
                    <p className="text-secondary">LIst Item 6</p>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-5 p-0 m-0 " >
                    <h4 style={{"fontWeight":"bold"}}>Company</h4>
                    <p className="text-secondary mt-4">LIst Item 1</p>
                    <p className="text-secondary">LIst Item 2</p>
                    <p className="text-secondary">LIst Item 3</p>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-5 p-0 m-0 " >
                    <h4 style={{"fontWeight":"bold"}}>Company</h4>
                    <p className="text-secondary mt-4">LIst Item 1</p>
                    <p className="text-secondary">LIst Item 2</p>
                    <p className="text-secondary">LIst Item 3</p>
                    <p className="text-secondary">LIst Item 4</p>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-5 p-0 m-0 " >
                    <h4 style={{"fontWeight":"bold"}}>Company</h4>
                    <p className="text-secondary mt-4">LIst Item 1</p>
                    <p className="text-secondary">LIst Item 2</p>
                    <p className="text-secondary">LIst Item 3</p>
                    <p className="text-secondary">LIst Item 4</p>
                  </div>
                  <div className="footer col-lg-4 col-md-6 col-sm-6 p-4 m-0 border" >
                      <h5>Subscribe</h5>
                      <input placeholder="Email Address" className="text-secondary rounded p-2 mt-2" style={{"border":"none","backgroundColor":"#514898","color":"white"}} />
                      <p className="text-secondary mt-3">Hello, we are Lift Media. Our goal is to <br/> translate the positive effects from <br/> revolutionizing how companies engage with <br/> their clients & their team.</p>
                  </div>
                </div>
             </div>
        </div> 
      </>
    );
  }
  
  export default Footer;