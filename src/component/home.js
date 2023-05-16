
import Hero from "../component/hero";
import Nav from "../component/nav";
import Profile from "../component/profile";
import Seeker from "../component/seeker";
import Employer from "../component/employer";
import Explore from "../component/explore";
import Contact from "../component/contact";
import Footer from "../component/footer"
const Home =()=>{
    return(
        <>
    <Nav/>
    <Hero/>
    <Profile/>
      <Seeker/>
      <Employer/>
      <Explore/>
      <Contact/>
      <Footer/>

        </>
    )
}

export default Home