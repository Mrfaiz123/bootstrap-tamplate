import React from 'react'
//import img from '../images/Avatar (1).png'
//import img2 from '../images/Screenshot7.png'
import { useNavigate } from 'react-router-dom';
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsYoutube,BsFillEnvelopeFill,BsBrowserChrome} from 'react-icons/bs'
import {MdSportsBasketball} from 'react-icons/md'
//import img1 from '../images/Rectangle.png'
import {VscMortarBoard} from 'react-icons/vsc'
import {FiLink} from 'react-icons/fi'
import {FcInspection} from 'react-icons/fc'
import {GiTrophyCup} from 'react-icons/gi'
import {GrHistory,GrCertificate} from 'react-icons/gr'
import {AiFillFileText,AiFillFolder} from 'react-icons/ai'
import {TfiBarChart} from 'react-icons/tfi'
import {CiLocationOn} from 'react-icons/ci'
import {RiFootballLine} from 'react-icons/ri'
import {TbPackages} from 'react-icons/tb'
import {IoPerson} from 'react-icons/io5'


export default function FromSearch() {

    const navigate = useNavigate();
    const Previous = () => {
      navigate("/page4")
    }
  return (
   <>

            <div className="container-fluid mb-5"style={{"marginTop":"150px"}} >
                  <div className="container">
                    <div className="row  d-flex justify-content-between">


                      <div className='sign col-lg-3 col-md-3 col-sm-12  rounded ' >
                          <div className='text-center  d-flex justify-content-between flex-column align-items-center '>
                            <img src='images/Avatar1.png'/>
                              <a className=" mt-3 ">Wade Warren</a>
                              <p className='text-secondary mt-2'>Front End Develpoer</p>
                              <div className='d-flex justify-content-between col-12 '>
                                <BsFacebook className='text-Primary 'style={{"fontSize":"25px","color":"#3B3775"}}/>
                                <BsInstagram className='text-Primary text-2xl' style={{"fontSize":"25px","color":"#3B3775"}}/>
                                <BsTwitter className='text-Primary text-2xl' style={{"fontSize":"25px","color":"#3B3775"}}/>
                                <BsLinkedin style={{"fontSize":"25px","color":"#3B3775"}}/>
                                <BsYoutube style={{"fontSize":"25px","color":"#3B3775"}}/>
                                <MdSportsBasketball style={{"fontSize":"25px","color":"#3B3775"}}/>
                              </div>
                              <div className='mt-5 col-12' style={{"height":"2px","backgroundColor":"silver"}}></div>


                              <div className='col-12  d-flex justify-content-around align-items-center  mt-5'>
                                <IoPerson style={{"fontSize":"25px"}}/>
                                <p className='mt-3'>Basic Information</p>
                                <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                              </div>
                              <div className='col-12  d-flex justify-content-around align-items-center  '>
                                <BsFillEnvelopeFill style={{"fontSize":"25px"}}/>
                                <p className='mt-3'>Credentials</p>
                                <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                              </div>
                              <div className='col-12 d-flex justify-content-around align-items-center '>
                                <FiLink style={{"fontSize":"25px"}}/>
                                <p className=' mt-3'>Public Link</p>
                                <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                              </div>
                              <p className=' text-secondary'>http://website.com/profile/</p>
                              <div className='col-12 d-flex justify-content-center mt-2 '>
                                <BsFacebook style={{"fontSize":"25px","color":"#2961CD","fontWeight":"bold"}}/>
                                <p>Share on Facebook</p>
                              </div>
                              <div className='col-12 d-flex justify-content-around align-items-center '>
                                  <VscMortarBoard style={{"fontSize":"25px"}}/>
                                  <p className='mt-3'>Education</p>
                                  <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                              </div>
                              <div className='col-12 d-flex justify-content-around align-items-center '>
                                  <FcInspection style={{"fontSize":"25px"}}/>
                                  <p className='mt-3'>Industry</p>
                                  <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                              
                              </div>
                              <p className='text-secondary '>Accounting/Taxation</p>
                              <div className='col-12 d-flex justify-content-around align-items-center '>
                                  <GiTrophyCup style={{"fontSize":"25px"}}/>
                                  <p className='mt-3 '>Awards</p>
                                  <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                              </div>
                          </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-12' >
                        <p style={{"fontSize":"23px","fontWeight":"bold"}}>Already Have a Resume?</p>
                        <button className='col-8 text-white p-2 rounded'style={{"border":"none","fontWeight":"bold",background: `linear-gradient(85.89deg, #49478C 7.82%, #9756FF 117.28%)`}} onClick={Previous}>Upload File</button>
                        <div className='col-12 d-flex justify-content-around align-items-center mt-4'>
                          <AiFillFileText style={{"fontSize":"25px"}}/>
                          <p>Summary</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                        </div>
                      <div className='col-12 d-flex justify-content-around align-items-center '>
                          <GrHistory style={{"fontSize":"25px"}}/>
                          <p>Work History</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                      </div>

                      <div className='col-12 d-flex justify-content-around align-items-center'>
                          <AiFillFolder style={{"fontSize":"25px"}}/>
                          <p>Work History</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>
                      </div>

                      <div className='col-12 d-flex justify-content-around align-items-center'>
                          <GrCertificate style={{"fontSize":"25px"}}/>
                          <p>Certificationsy</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>

                      </div>


                      <div className='col-12 d-flex justify-content-around align-items-center'>
                      <TfiBarChart style={{"fontSize":"25px"}}/>
                          <p>Skills</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>

                      </div>

                      <div className='col-12 d-flex justify-content-around align-items-center'>
                      <CiLocationOn style={{"fontSize":"25px"}}/>
                          <p>Preferred Job City</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>

                      </div>

                      <div className='col-12 d-flex justify-content-around align-items-center'>
                      <RiFootballLine style={{"fontSize":"25px"}}/>
                          <p>Hobbies/Activites</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>

                      </div>

                      <div className='col-12 d-flex justify-content-around align-items-center'>
                      <BsBrowserChrome style={{"fontSize":"25px"}}/>
                          <p>Languages</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>

                      </div>
                      
                      <div className='col-12 d-flex justify-content-around align-items-center'>
                      <TbPackages style={{"fontSize":"25px"}}/>
                          <p>Refrence</p>
                          <button style={{ "border":"none","backgroundColor":"transparent","color":"blue"}}>Add</button>

                      </div>



                      </div>

                      <div className='sign col-lg-3 col-md-3 col-sm-12 rounded border ' >
                        <div className='col-12 d-flex d-flex justify-content-evenly align-items-center mt-4'>
                          <IoPerson className='' style={{"fontWeight":"bold","fontSize":"25px"}}/>
                          <h4>Profile Strength</h4>
                        </div>
                        <img src="images/Screenshot10.png" className=''/>
                        <button className='col-12 text-primary border border-primary text-semibold rounded py-1'style={{"fontWeight":"bold","backgroundColor":"transparent"}} >Download Cv</button>
                      </div>
                    </div>
                 </div>
            </div>

            
        
        
        
        
       
    </>
  )
}