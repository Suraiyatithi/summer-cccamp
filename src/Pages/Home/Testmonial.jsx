import React from 'react';
import bg from '../../assets/candles-dark-room-with-flowers-candles.jpg'
import './Allcss/all.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import per1 from '../../assets/testmonial1.jpg';
import per2 from '../../assets/testmonial2.jpg'
import per3 from '../../assets/testmonial3.jpg'



const Testmonial = () => {
    return (
        <div className="background p-5 mb-5 mt-5" style={{backgroundImage:`url(${bg})`}}>
            <div className="p-5 m-5 bg1">
              
            <Carousel autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
        <div className='p-5 text-center text-white'>
          <img style={{height:'6rem',width:"6rem"}} className='round' src={per1} alt="" />
      <p>I Just want to thank you for your kind service and beautigul <br /> in struction for my further purpose.ONe Wensite i can believe <br /> is that and here i can find my usual learning.</p>
       <h3 className='mt-3'>Ramisha AShan</h3>
       <p className='pb-5'>Batch-12</p>
        </div>
        <div className='p-5 text-center text-white'>
          <img style={{height:'6rem',width:"6rem"}} className='round' src={per3} alt="" />
      <p>Nice Site.To start your journey here also i learn a lot <br /> from there for my further purpose.ONe Wensite i can believe <br /> is that and here i can find my usual learning.</p>
       <h3 className='mt-3'>Arpon dash</h3>
       <p className='pb-5'>Batch-10</p>
        </div>
        <div className='p-5 text-center text-white'>
          <img style={{height:'6rem',width:"6rem"}} className='round' src={per2} alt="" />
      <p>Thank you so much  for helping me to reach my goal <br /> in struction for my further purpose.ONe Wensite i can believe <br /> also tyhe instructor are also very kind</p>
       <h3 className='mt-3'>Ahona Asha</h3>
       <p className='pb-5'>Batch-11</p>
        </div>
        <div className='p-5 text-center text-white'>
          <img style={{height:'6rem',width:"6rem"}} className='round' src={per1} alt="" />
      <p>I Just want to thank you for your kind service and beautigul <br /> in struction for my further purpose.ONe Wensite i can believe <br /> is that and here i can find my usual learning.</p>
       <h3 className='mt-3'>Ramisha AShan</h3>
       <p className='pb-5'>Batch-12</p>
        </div>
      </Carousel>
            </div>
        </div>
    );
};

export default Testmonial;