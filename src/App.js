import { BrowserRouter,Routes,Route } from "react-router-dom";
import Slider from "react-slick"
import React, { useEffect, useRef } from 'react';
import Whoweare from './Frontpage/Whoweare';
import './App.css';
import Navbar from './Frontpage/Navbar';
import Ourapproach from './Frontpage/Approach';
import Checkperiod from './Frontpage/Checkperiod';
import NewsInsights from "./Frontpage/NewsInsights";
import Footer from "./Frontpage/Footer";


// page 2
import Ourpeople from "./Ourpeoplepage/Ourpeople";

import Homepage from "./Frontpage/Homepage";



function App() {



  return (
    <div>
      

      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/home" element={<Homepage/>} />
          <Route path="/ourpeople" element={<Ourpeople/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;







