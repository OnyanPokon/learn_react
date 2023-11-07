import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>
      </Router>
    </>   
  )
}

export default App
