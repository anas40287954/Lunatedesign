import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "react-slick"
import React, { useEffect, useRef } from 'react';
import Whoweare from './Whoweare';
import '../App.css';
import Navbar from './Navbar';
import Ourapproach from './Approach';
import Checkperiod from './Checkperiod';
import NewsInsights from "./NewsInsights";
import Footer from "./Footer";


function Homepage() {



    return (
        <div>
            <div className='hero-image'>

                <Navbar />

                <div className='hero-banner'>
                    <div className='hero-text-container'>
                        {/* Use ref for the h1 */}
                        {/* <h1 className='hero-text'>hello.... anas. jamil..</h1> */}

                        <h1 className='hero-text'>
                            {/* <span className='hero-text-item' >Innovate.</span>
                                <span className='hero-text-item'>Inspire<span className='hero-text-dot'>.</span>Invest<span className='hero-text-dot'>.</span></span> */}
                            Innovate. Inspire. Invest.

                        </h1>
                        <p className='hero-text-description'>
                            Lunate is a leading alternative investment manager,
                            headquartered in Abu Dhabi, with over US$60 billion in assets under management.
                        </p>
                    </div>
                </div>
            </div>
            <div className='segment2'>
                <Whoweare />
            </div>
            <div className='segment3'>
        <Ourapproach />
      </div>
            <div className="segment4">
                <NewsInsights />
            </div>

            <div className="footer">
                <Footer />
            </div>


        </div>
    );
}

export default Homepage;







