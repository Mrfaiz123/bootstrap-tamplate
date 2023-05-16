import React from "react";
import { useNavigate } from "react-router-dom";

function Page2() {
   const navigate=useNavigate()
   const next=()=>{
    navigate('/page3')
  }
  const back=()=>{
    navigate('/page1')
  }


    return (
      <>

        <div className="container-fluid border pb-3 " >

        <div className="col-lg-12 col-md-12 col-sm-12" style={{"position":"relative"}}>
              <div className="div text-center text-white">
                <h1 className="mt-4">Step 2: Contact Information</h1>
                <p className="mt-2">How can we get in touch with you  about the job of<br/> your dreams</p>
              </div>
            </div>


          <div className="container d-flex justify-content-center " style={{"position":"relative","marginTop":"160px"}}>
            <div className="sign bg-white row col-lg-10 col-md-10 col-sm-10 pb-3 d-flex justify-content-center border ">  
                <div className=" col-lg-10  d-flex flex-column justify-content-center" >
                  <img src="images/Screenshot7.png"  />
                  <div className="d-flex  justify-content-between ">
                    <div className="col-lg-5 ">
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Email<span className="text-danger">*</span></p>
                          <input placeholder="Email" className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Mobile<span className="text-danger">*</span></p>
                          <input placeholder="123654" className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Address Live 1<span className="text-danger">*</span></p>
                          <input placeholder="kuch bhi" className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Address Live 2<span className="text-danger">*</span></p>
                          <input placeholder="kuch bhi 2" className="text-secondary p-2 w-100"/>

                          <button className="col-12 mt-5 rounded text-primary py-2 border border-primary"style={{ "border":"none","font-weight":"bold",}} onClick={back} >Previus</button>

                         
                    </div>
                    <div className="col-lg-5">
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Home Contact no<span className="text-danger">*</span></p>
                          <input placeholder="147852" className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Country<span className="text-danger">*</span></p>
                          <input placeholder="US"  className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>City<span className="text-danger">*</span></p>
                          <input placeholder="London"  className="text-secondary p-2 w-100"/>
                          <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Zip code<span className="text-danger">*</span></p>
                          <input placeholder="Kuch bhi 3"  className="text-secondary p-2 w-100"/>

                          <button className="col-12 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} onClick={next}>Next</button>

                    </div>
                  </div>


                  

                </div>
                
            </div>
          </div>
        </div>
      </>
  
    );
  }
  
  export default Page2;