// import img1 from '../../assets/slider2.jpg'
// import img2 from '../../assets/slider3.jpg'
// import img3 from '../../assets/slider4.jpg';
// import img4 from '../../assets/1700.jpg';
// import img1 from '../../assets/portrait-young-girl-red-beret-painting-her-lips-with-bright-lipstick-pink-background.jpg'
// import img2 from '../../assets/high-angle-beauty-products-arrangement-with-copy-space.jpg';
// import img3 from '../../assets/relaxed-beautiful-face-young-girl-with-clear-skin-pink-orchids-beauty-treatment-concept.jpg'
// import img4 from '../../assets/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg'
// const Slider = () => {
//     return (
//         <div className=' mb-11'>
//         <div className="carousel w-full">
//   <div id="item1" className="carousel-item w-full">
//     <img src={img1} className="w-full" />
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src={img2} className="w-full" />
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//     <img src={img3} className="w-full" />
//   </div> 
//   <div id="item4" className="carousel-item w-full">
//     <img src={img4} className="w-full" />
//   </div>
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>
//         </div>
//     );
// };

// export default Slider;

import React, { useState, useEffect } from 'react';
import img1 from '../../assets/portrait-young-girl-red-beret-painting-her-lips-with-bright-lipstick-pink-background.jpg';
import img2 from '../../assets/high-angle-beauty-products-arrangement-with-copy-space.jpg';
import img3 from '../../assets/relaxed-beautiful-face-young-girl-with-clear-skin-pink-orchids-beauty-treatment-concept.jpg';
import img4 from '../../assets/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg';


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
          <img src={img4} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;






