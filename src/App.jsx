import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Overlaymenu from "./components/Overlaymenu";

function App() {

  return (
    <>   
      <Router>
          <Overlaymenu />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Routes>
      </Router>
    </>   
  )
}

export default App
