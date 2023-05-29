import {Routes , Route} from 'react-router-dom'
import Page1 from "./component/routes/page1";
import Page2 from "./component/routes/page2";
import Page3 from "./component/routes/page3";
import Page4 from "./component/routes/pages4";
import Page5 from "./component/routes/page5";
import Home from "./component/home";



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="page1" element={<Page1/>}/>
        <Route path="page2" element={<Page2/>}/>
        <Route path="page3" element={<Page3/>}/>
        <Route path="page4" element={<Page4/>}/>
        <Route path="page5" element={<Page5/>} />
      </Routes>

     
    </>

  );
}

export default App;