

// import React, { useState, useEffect } from 'react';
// // import img1 from '../../assets/portrait-young-girl-red-beret-painting-her-lips-with-bright-lipstick-pink-background.jpg';
// // import img2 from '../../assets/high-angle-beauty-products-arrangement-with-copy-space.jpg';
// // import img3 from '../../assets/relaxed-beautiful-face-young-girl-with-clear-skin-pink-orchids-beauty-treatment-concept.jpg';
// // import img4 from '../../assets/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg';
// import img1 from '../../assets/banner1.jpg';
// import img2 from '../../assets/banner2.jpg';
// import img3 from '../../assets/banner3jpg.jpg';
// import img4 from '../../assets/banner5.jpg';

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';



// const Slider = () => {
//   return (
//     <div className="mb-11">
//        <Carousel autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
//         <div>
//           <img src={img1} alt="Slide 1" />
//         </div>
//         <div>
//           <img src={img2} alt="Slide 2" />
//         </div>
//         <div>
//           <img src={img3} alt="Slide 3" />
//         </div>
//         <div>
//           <img src={img1} alt="Slide 4" />
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;




import React from 'react';
import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3jpg.jpg';
import img4 from '../../assets/banner5.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const bannerData = [
  {
    image: img1,
    title: "Elevate Your Beauty Skills",
    subtitle: "Join the #1 Makeup Schooling Platform",
  },
  {
    image: img2,
    title: "Master the Art of Makeup",
    subtitle: "Hands-on Training with Experts",
  },
  {
    image: img3,
    title: "Become a Certified Beauty Pro",
    subtitle: "Learn, Practice, and Shine!",
  },
  {
    image: img4,
    title: "From Basics to Pro Techniques",
    subtitle: "Transform Your Passion into Profession",
  },
];

const Slider = () => {
  return (
    <div className="mb-12">
      <Carousel 
        autoPlay 
        infiniteLoop 
        interval={5000} 
        showThumbs={false} 
        showStatus={false}
        showArrows={true}
        transitionTime={800}
        swipeable={true}
        emulateTouch
      >
        {bannerData.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-[75vh] object-cover" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl text-pink-200 font-medium">
                {slide.subtitle}
              </p>
              <button className="mt-5 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:brightness-110 transition">
                Explore Courses
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;


