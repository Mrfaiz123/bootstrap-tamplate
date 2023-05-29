import React from "react";
import Screen3 from "../images/Screenshot3.png"; 

function Explore() {

    return (
      <>
         <div className="container-fluid mb-5"style={{"marginTop":"150px"}} >
            <div className="container">
                <div className="row  d-flex justify-content-around ">  
                    <div className="col-lg-11 col-md-6 col-sm-12 p-0 m-0 border extra-rounded" style={{"backgroundColor":"#514898","borderRadius":"10px"}}>
                        <h1 className="text-white mt-4" style={{"fontWeight":"bold","marginLeft":"60px"}}>Explore New Opportunities<br/> on the GO!</h1>
                        <button className="bg-white py-2 px-4 mt-2" style={{"color":"#514898","fontWeight":"bold","border":"none","borderRadius":"10px","marginLeft":"60px"}}>Get started</button>
                        <img src={Screen3} style={{"height":"120px","marginLeft":"450px"}} />
                    </div>
                </div>
            </div>
        </div>
      </>
  
    );
  }
  
  export default Explore;