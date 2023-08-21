// import img1 from '../../assets/slider2.jpg'
// import img2 from '../../assets/slider3.jpg'
// import img3 from '../../assets/slider4.jpg';
// import img4 from '../../assets/1700.jpg';
import img1 from '../../assets/portrait-young-girl-red-beret-painting-her-lips-with-bright-lipstick-pink-background.jpg'
import img2 from '../../assets/high-angle-beauty-products-arrangement-with-copy-space.jpg';
import img3 from '../../assets/relaxed-beautiful-face-young-girl-with-clear-skin-pink-orchids-beauty-treatment-concept.jpg'
import img4 from '../../assets/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg'
const Slider = () => {
    return (
        <div className=' mb-11'>
        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Slider;
// import React, { useState, useEffect } from 'react';
// import img1 from '../../assets/slider2.jpg';
// import img2 from '../../assets/slider3.jpg';
// import img3 from '../../assets/slider4.jpg';
// import img4 from '../../assets/1700.jpg';

// const Slider = () => {
//   const images = [img1, img2, img3, img4];
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     console.log('Active Index:', activeIndex); // Debugging
//     const interval = setInterval(() => {
//       // Calculate the next index
//       const nextIndex = (activeIndex + 1) % images.length;
//       setActiveIndex(nextIndex);
//     }, 5000); // Change slide every 5 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [activeIndex, images.length]);

//   const sliderStyle = {
//     display: 'flex',
//     width: `${images.length * 100}%`,
//     transition: 'transform 0.5s ease-in-out',
//     transform: `translateX(-${(100 / images.length) * activeIndex}%)`,
//   };

//   const imageStyle = {
//     maxWidth: '100%',
//   };

//   return (
//     <div className='mb-11'>
//       <div className='carousel w-full' style={sliderStyle}>
//         {images.map((image, index) => {
//           console.log('Rendering Image:', index, image); // Debugging
//           return (
//             <div key={index} className='carousel-item w-full'>
//               <img src={image} style={imageStyle} alt={`Slider ${index + 1}`} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Slider;




