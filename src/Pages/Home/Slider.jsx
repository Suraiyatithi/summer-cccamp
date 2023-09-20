

import React, { useState, useEffect } from 'react';
// import img1 from '../../assets/portrait-young-girl-red-beret-painting-her-lips-with-bright-lipstick-pink-background.jpg';
// import img2 from '../../assets/high-angle-beauty-products-arrangement-with-copy-space.jpg';
// import img3 from '../../assets/relaxed-beautiful-face-young-girl-with-clear-skin-pink-orchids-beauty-treatment-concept.jpg';
// import img4 from '../../assets/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3jpg.jpg';
import img4 from '../../assets/banner5.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Slider = () => {
  return (
    <div className="mb-11">
       <Carousel autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
        <div>
          <img src={img1} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;






