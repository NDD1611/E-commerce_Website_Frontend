
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DTDD from './pages/DTDD/DTDD.js'
import DisplayImage from "./component/DisplayImage.js";
import NoPage from './pages/NoPage/NoPage.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dtdd" element={<DTDD />} />
          <Route path="/getallimagefromserver" element={<DisplayImage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <script src="https://kit.fontawesome.com/5efaa1de1d.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
