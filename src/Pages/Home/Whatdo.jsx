import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import img1 from '../../assets/NicePng_png-background_316240.png'
import img2 from '../../assets/NicePng_floral-png_83415.png';
import card1 from '../../assets/makeup-pouch_1807383.png';
import card2 from '../../assets/make-up_545159.png';
import card3 from '../../assets/wellness_3065899.png';
const Whatdo = () => {
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
        <div className='mt-12'>
            <div className="">
                <div className="flex flex-col sm:flex-row">
                    <div className=" w-full lg:w-3/5 sm:w-full"  data-aos="fade-right">
                    {/* <p className='text-left '>___________________________________</p> */}
          <h2 className='text-2xl text-left md:text-4xl font-bold text-purple leading-tight'>What we do!</h2>
          <p className='text-left'>___________________________________</p>
          <h1 style={{lineHeight:"7rem"}} className=' mt-4 text-7xl sm:text-2xl md:text-2xl lg:text-7xl leading-loose font-semibold '>WE PROVIDE THE <span className='text-rose-900'>BEST INSTRUCTOR</span> </h1>
                  <div className="divide-x-8 divide-violet-900 "></div> 
                    </div>
                    <div className="w-full lg:w-2/5 sm:w-full " data-aos="fade-left">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full lg:w-1/4 sm:w-1/1">
                        <img src={img2} alt="" />
                    </div>
                    <div className="w-full lg:w-3/4 sm:w-1/1">
                        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-3">
                            <div className="col p-3">
                            <div className="card border border-rose-900" data-aos="fade-left">
  <div className="card-body">
    <h2 className="card-title">
        <img className='w-2/5' src={card1} alt="" />
    </h2>
    
    <p>Make up brush is more essential for perfect look</p>
    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>
                                
                            </div>
                            <div className="col p-3">
                            <div className="card border border-rose-900" data-aos="fade-left">
  <div className="card-body">
    <h2 className="card-title">
        <img className='w-2/5' src={card2} alt="" />
    </h2>
    <p>Use less makeup as much as possible</p>
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>
                            </div>
                            <div className="col p-3">
                            <div className="card border border-rose-900 " data-aos="fade-left">
  <div className="card-body">
    <h2 className="card-title">
        <img className='w-2/5' src={card3} alt="" />
    </h2>
    <p>Make The right choice to apply right shade</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whatdo;