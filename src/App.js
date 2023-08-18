
import './App.css';
import Home  from './Components/Home';
import About from './Components/About'
import Blog from './Components/Blog';
import Contactus from "./Components/Contact us";

import { BrowserRouter, Routes, Route } from "react-router-dom";



// const bearsPicture = new URL ("./images/img1.jpg",import.meta.url)
function App() {
  
  return <>
   
   <BrowserRouter>
   <Routes>
   <Route>
       <Route index element={<Home />} />
       <Route path="About" element={<About />} />
       <Route path="contactus" element={<Contactus />} />
       <Route path="blog" element={<Blog/>} />
     </Route>
   </Routes>
   </BrowserRouter>
     
     </>
}


export default App;
