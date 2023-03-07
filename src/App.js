
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DTDD from './pages/DTDD/DTDD.js'
import DisplayImage from "./component/DisplayImage.js";
import NoPage from './pages/NoPage/NoPage.js'
import Home from './pages/home/Home.js'
import Admin from './pages/admin/Admin.js'
import Nsx from './pages/admin/Nsx.js'
import Laptop from './pages/laptop/Laptop.js'
import SanPham from './pages/admin/SanPham.js'

import Test from './Test.js'


function App() {


  let arr = ["test1", "test2", "test3"]


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dtdd" element={<DTDD />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/getallimagefromserver" element={<DisplayImage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/nsx" element={<Nsx />} />
          <Route path="/admin/sanpham" element={<SanPham />} />
          {
            arr.map((id, index) => {
              return (
                <Route key={index} path={`/dtdd/` + id} element={<Test id={id} />} />
              )
            })
          }
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
