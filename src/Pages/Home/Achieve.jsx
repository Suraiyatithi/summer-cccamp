// import React, { useEffect, useState } from 'react';
// import img from '../../assets/flower.jpg'
// import img6 from '../../assets/NicePng_purple-flowers-png_141256.png';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

// const Achieve = () => {
//     const [count, setCount] = useState(1);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         if (count < 4000) {
//           setCount(count + 1);
//         } else {
//           clearInterval(interval);
//         }
//       }, 10); // Adjust the interval speed as needed
  
//       return () => {
//         clearInterval(interval); // Clean up the interval on component unmount
//       };
//     }, [count]);
//     const triggerAnimations = () => {
//       AOS.refresh(); // Refresh AOS to trigger animations
//   };

//   // Attach the scroll event listener
//   React.useEffect(() => {
//       window.addEventListener('scroll', triggerAnimations);
//       return () => {
//           window.removeEventListener('scroll', triggerAnimations);
//       };
//   }, []);
//     return (
//         <div className=''>
//            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
          
            
//             <div className="col " >

//                <h1 className='mt-6 text-5xl lg:text-5xl leading-loose  font-semibold ' data-aos="fade-righ">What we have achieve in the last few years</h1>
//                <p className='text-rose-900' data-aos="fade-righ">____________________________________________________________</p>
//                <p data-aos="fade-righ">In These passed year we achieve too many award or prize for providing the 
//                 best class in the social platform also we had earn too many happy client or studentwhom also start 
//                 their own makeup studio.By Creating their own studio they have achieve tyoo many award these is also our achievement that our student ar also bringing successs.Our intsructor are also very much polite to the student .they fill the student interest also they are expert .So with expert student become  more expert.Be with Us.</p>
               
//                 <div className="relative mt-6">
//                  <div className=" p-6 text-center">
//                  <div style={{height:"20rem",width:"20rem"}} className="lg:p-18 lg:ml-36 sm:p-12 lg:-mb-36 p-8 bg-pink-200 rounded-full shadow-lg lg:mr-24 " data-aos="fade-righ">
//                     <p className='lg:text-7xl sm:text-xl text-rose-900 font-semibold'>{count}+</p>
//                     <p className='text-lg font-bold text-violet-400'>Happy Student</p>
//                     <p>We are happy to share that we can satisfied  thousand of student</p>
//                     </div>
//                  </div>
//                     <div className=" p-6 text-center ">
//                     <div  style={{height:"20rem",width:"20rem"}} className="lg:p-18  sm:p-12 bg-pink-200 rounded-full p-8 shadow-lg lg:mr-24"data-aos="fade-righ">
//                     <p className='lg:text-7xl sm:text-xl text-rose-900 font-semibold '>{count}+</p>
//                     <p className='text-lg font-bold text-violet-400'>Satisfied Student</p>
//                     <p>We are happy to share that we can satisfied  thousand of student</p>
//                 </div>
//             </div>
//         </div>
//         {/* <div className="flex absolute z-7">
//         <img data-aos="fade-righ" className='w-72' src={img6} alt="" />
//         <img data-aos="fade-righ" className='w-72' src={img6} alt="" />
//         </div> */}
//         </div>
//             <div className="col " data-aos="fade-left">
//             <img className='rounded' src={img} alt="" />
//             </div>
//             </div> 
//         </div>
//     );
// };


// export default Achieve;

import React, { useEffect, useState } from 'react';
import img from '../../assets/flower.jpg';
import img6 from '../../assets/NicePng_purple-flowers-png_141256.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Achieve = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 4000 ? prevCount + 10 : 4000));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

        {/* Text & Stats */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-snug">
            What We’ve Achieved in Recent Years
          </h1>
          <p className="mt-2 text-pink-600">_________________________________________</p>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
            Over the years, we’ve proudly received multiple awards for our excellence in online beauty education. 
            Thousands of students have trained with us and gone on to open their own makeup studios — achieving great success 
            and recognition. Our instructors are not just skilled but also deeply caring, making sure every student 
            is empowered to shine. With expert guidance, our learners become confident professionals. Be part of our growing family!
          </p>

          {/* Stat cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-pink-100 border-2 border-pink-300 rounded-full w-60 h-60 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <p className="text-6xl font-bold text-rose-700 drop-shadow">{count}+</p>
              <p className="text-lg font-semibold text-purple-600 mt-2">Happy Students</p>
              <p className="text-sm text-center text-gray-600 px-4">Thousands have rated us highly and launched their careers.</p>
            </div>

            <div
              className="bg-purple-100 border-2 border-purple-300 rounded-full w-60 h-60 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition"
              data-aos="zoom-in"
            >
              <p className="text-6xl font-bold text-rose-700 drop-shadow">{count}+</p>
              <p className="text-lg font-semibold text-pink-600 mt-2">Certified Artists</p>
              <p className="text-sm text-center text-gray-600 px-4">Our graduates are now professionals across the globe.</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative" data-aos="fade-left">
          <img src={img} alt="Achievement" className="rounded-xl shadow-2xl border-4 border-pink-300" />
          <img
            src={img6}
            alt="Flower overlay"
            className="absolute w-32 top-[-30px] right-[-20px] opacity-60 rotate-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Achieve;

