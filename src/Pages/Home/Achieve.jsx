import React, { useEffect, useState } from 'react';
import img from '../../assets/close-up-elegant-beauty-selfcare-treatment.jpg'
import img6 from '../../assets/NicePng_purple-flowers-png_141256.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Achieve = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < 4000) {
          setCount(count + 1);
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust the interval speed as needed
  
      return () => {
        clearInterval(interval); // Clean up the interval on component unmount
      };
    }, [count]);
    const triggerAnimations = () => {
      AOS.refresh(); // Refresh AOS to trigger animations
  };

  // Attach the scroll event listener
  React.useEffect(() => {
      window.addEventListener('scroll', triggerAnimations);
      return () => {
          window.removeEventListener('scroll', triggerAnimations);
      };
  }, []);
    return (
        <div className=''>
           <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
          
            
            <div className="col " >

               <h1 className='mt-6 text-5xl lg:text-5xl leading-loose  font-semibold ' data-aos="fade-righ">What we have achieve in the last few years</h1>
               <p className='text-rose-900' data-aos="fade-righ">____________________________________________________________</p>
               <p data-aos="fade-righ">In These passed year we achieve too many award or prize for providing the 
                best class in the social platform also we had earn too many happy client or studentwhom also start 
                their own makeup studio.By Creating their own studio they have achieve tyoo many award these is also our achievement that our student ar also bringing successs.Our intsructor are also very much polite to the student .they fill the student interest also they are expert .So with expert student become  more expert.Be with Us.</p>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-12">
                 <div className="col p-6">
                 <div className=" p-8 bg-pink-200  " data-aos="fade-righ">
                    <p className='text-7xl text-rose-900'>{count}+</p>
                    <p>Happy Student</p>
                    </div>
                 </div>
                    <div className="col p-6 mt-20">
                    <div className=" p-8  bg-pink-200 "data-aos="fade-righ">
                    <p className='text-7xl text-rose-900'>{count}+</p>
                    <p>Satisfied Student</p>
                </div>
            </div>
        </div>
        <div className="flex absolute z-7">
        <img data-aos="fade-righ" className='w-72' src={img6} alt="" />
        <img data-aos="fade-righ" className='w-72' src={img6} alt="" />
        </div>
        </div>
            <div className="col " data-aos="fade-left">
            <img className='' src={img} alt="" />
            </div>
            </div> 
        </div>
    );
};


export default Achieve;
