import "./simpleslider.css"

import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

function SimpleSlider() {
  const sync1Ref = useRef(null);
  const sync2Ref = useRef(null);
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  useEffect(() => {
    $(sync1Ref.current).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: sync2Ref.current,
      nextArrow: $(nextArrowRef.current),
      prevArrow: $(prevArrowRef.current),
    });

    $(sync2Ref.current).slick({
      draggable: false,
      asNavFor: sync1Ref.current,
      dots: true,
      arrows: false,
    });

    return () => {
      $(sync1Ref.current).slick('unslick');
      $(sync2Ref.current).slick('unslick');
    };
  }, []);

  return (<>
    <div className="container">


      <div className="text-container">
        <div ref={sync1Ref} className="slider-for">
          <div className="text-slide">
            <div>
              <svg width="71" height="73" viewBox="0 0 71 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2448_511)">
                  <path d="M0.0197634 73C1.92445 71.8576 3.90163 70.7939 5.95131 69.8221C27.3247 59.6909 51.3408 61.6278 70.2493 72.8687C70.4141 67.4912 69.3398 62.0021 66.8551 56.815C58.5114 39.3825 37.5467 31.9827 20.0289 40.2886C7.01899 46.4474 -0.421807 59.5333 0.0197634 73Z" fill="#E0D4BC" />
                  <path d="M0.0199466 0C1.92463 1.14247 3.90182 2.20615 5.9515 3.17791C27.3314 13.3091 51.341 11.3788 70.2495 0.137884C70.4143 5.51538 69.34 11.0045 66.8553 16.1916C58.5116 33.6241 37.5469 41.0239 20.029 32.718C7.01918 26.5592 -0.421624 13.4667 0.0199466 0Z" fill="#E0D4BC" />
                </g>
                <defs>
                  <clipPath id="clip0_2448_511">
                    <rect width="70.2625" height="73" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1>Assets Classes</h1>
              <p>We invest through diversified asset classes, including Private Equity, Credit, Real Assets, Venture Capital, and Public Equities.</p>
            </div>
            <div>

              <button className="learnmore-btn">Learn More →</button>

            </div>

          </div>

          <div className="text-slide">
            <div>
              <svg width="71" height="73" viewBox="0 0 148 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M66.2947 11.8569C68.2455 7.76795 70.394 3.83681 72.6874 0.0371485C45.6141 -0.843742 19.3052 13.9868 6.91527 39.9007C-9.77162 74.8077 5.1095 116.578 40.144 133.196C50.57 138.153 61.6024 140.296 72.4106 139.967C49.8187 102.299 45.9304 54.442 66.2947 11.8569ZM81.7823 11.8569C79.8316 7.76795 77.6831 3.83681 75.3896 0.0371485C102.463 -0.843742 128.772 13.9868 141.149 39.9007C157.849 74.7945 142.968 116.578 107.933 133.196C97.507 138.153 86.4747 140.296 75.6664 139.967C98.2583 102.299 102.147 54.442 81.7823 11.8569Z" fill="#E0D4BC" />
              </svg>

              <h1>Investment Strategies</h1>
              <p>Last summer, I had the opportunity to explore the breathtaking landscapes of New Zealand.  every moment was a new adventure. </p>
            </div>
            <div>

              <button className="learnmore-btn">Learn More →</button>

            </div>

          </div>


          <div className="text-slide">
            <div>
              <svg width="71" height="73" viewBox="0 0 71 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2448_511)">
                  <path d="M0.0197634 73C1.92445 71.8576 3.90163 70.7939 5.95131 69.8221C27.3247 59.6909 51.3408 61.6278 70.2493 72.8687C70.4141 67.4912 69.3398 62.0021 66.8551 56.815C58.5114 39.3825 37.5467 31.9827 20.0289 40.2886C7.01899 46.4474 -0.421807 59.5333 0.0197634 73Z" fill="#E0D4BC" />
                  <path d="M0.0199466 0C1.92463 1.14247 3.90182 2.20615 5.9515 3.17791C27.3314 13.3091 51.341 11.3788 70.2495 0.137884C70.4143 5.51538 69.34 11.0045 66.8553 16.1916C58.5116 33.6241 37.5469 41.0239 20.029 32.718C7.01918 26.5592 -0.421624 13.4667 0.0199466 0Z" fill="#E0D4BC" />
                </g>
                <defs>
                  <clipPath id="clip0_2448_511">
                    <rect width="70.2625" height="73" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1>Solution & Products</h1>
              <p>We invest through diversified asset classes, including Private Equity, Credit, Real Assets, Venture Capital, and Public Equities.</p>
            </div>
            <div>

              <button className="learnmore-btn">Learn More →</button>

            </div>

          </div>

        </div>
      </div>



      <div ref={sync2Ref} className="slider-nav">
        <div><img src="assetsimage.svg" alt="" /></div>
        <div><img src="/heroback.svg" alt="" /></div>
        <div><img src="/heroimage.svg" alt="" /></div>
      </div>

      {/* Custom arrow elements */}
      <div ref={prevArrowRef} className="custom-arrow prev-arrow">

        <svg width="30" height="30" viewBox="0 0 1024 1024" fill="#ffffff">
          <path d="M768 120.768L707.568 64 256 512l461.568 448L768 903.232 364.928 512z" />
        </svg>


      </div>

      <div ref={nextArrowRef} className="custom-arrow next-arrow">
        <svg width="30" height="30" viewBox="0 0 1024 1024" fill="#ffffff">
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
        </svg>
      </div>


    </div>

  </>

  );
}

export default SimpleSlider;
