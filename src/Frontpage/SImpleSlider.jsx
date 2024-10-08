import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';

const SlickCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).slick()
      
 

    // Cleanup on unmount
    return () => {
      $(sliderRef.current).slick('unslick');
    };
  }, []);

  return (
    <div ref={sliderRef} className="fade">
      <div>Your Slide 1</div>
      <div>Your Slide 2</div>
      <div>Your Slide 3</div>
      {/* Add more slides as needed */}
    </div>
  );
};

export default SlickCarousel;
