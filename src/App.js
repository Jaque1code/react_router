import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navone from "./component/Navone.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./views/Home";
import  Contact from "./views/Contact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navone></Navone>
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
