// import React from 'react';
// import bg from '../../assets/candles-dark-room-with-flowers-candles.jpg'
// import './Allcss/all.css'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import per1 from '../../assets/testmonial1.jpg';
// import per2 from '../../assets/testmonial2.jpg'
// import per3 from '../../assets/testmonial3.jpg'



// const Testmonial = () => {
//     return (
//         <div className="background p-5 mb-5 mt-5" style={{backgroundImage:`url(${bg})`}}>
//             <div className="p-5 m-5 bg1">
              
//             <Carousel autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
//         <div className='p-10 text-center text-white'>
//           <img style={{height:'6rem',width:"6rem"}} className='round' src={per1} alt="" />
//       <p>I Just want to thank you for your kind service and beautigul <br /> in struction for my further purpose.ONe Wensite i can believe <br /> is that and here i can find my usual learning.</p>
//        <h3 className='mt-3'>Ramisha AShan</h3>
//        <p className='pb-5'>Batch-12</p>
//         </div>
//         <div className='p-10 text-center text-white'>
//           <img style={{height:'6rem',width:"6rem"}} className='round' src={per3} alt="" />
//       <p>Nice Site.To start your journey here also i learn a lot <br /> from there for my further purpose.ONe Wensite i can believe <br /> is that and here i can find my usual learning.</p>
//        <h3 className='mt-3'>Arpon dash</h3>
//        <p className='pb-5'>Batch-10</p>
//         </div>
//         <div className='p-10 text-center text-white'>
//           <img style={{height:'6rem',width:"6rem"}} className='round' src={per2} alt="" />
//       <p>Thank you so much  for helping me to reach my goal <br /> in struction for my further purpose.ONe Wensite i can believe <br /> also tyhe instructor are also very kind</p>
//        <h3 className='mt-3'>Ahona Asha</h3>
//        <p className='pb-5'>Batch-11</p>
//         </div>
//         <div className='p-10 text-center text-white'>
//           <img style={{height:'6rem',width:"6rem"}} className='round' src={per1} alt="" />
//       <p>I Just want to thank you for your kind service and beautigul <br /> in struction for my further purpose.ONe Wensite i can believe <br /> is that and here i can find my usual learning.</p>
//        <h3 className='mt-3'>Ramisha AShan</h3>
//        <p className='pb-5'>Batch-12</p>
//         </div>
//       </Carousel>
//             </div>
//         </div>
//     );
// };

// export default Testmonial;
import React from 'react';
import bg from '../../assets/candles-dark-room-with-flowers-candles.jpg';
import './Allcss/all.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import per1 from '../../assets/testmonial1.jpg';
import per2 from '../../assets/testmonial2.jpg';
import per3 from '../../assets/testmonial3.jpg';

const testimonials = [
  {
    img: per1,
    name: 'Ramisha Ashan',
    batch: 'Batch-12',
    text: 'I just want to thank you for your kind service and beautiful instruction. One website I can truly trust for learning and growing in my passion.',
  },
  {
    img: per3,
    name: 'Arpon Dash',
    batch: 'Batch-10',
    text: 'Nice site! A perfect place to start your journey. I’ve learned a lot for my future goals and the instructors are super supportive.',
  },
  {
    img: per2,
    name: 'Ahona Asha',
    batch: 'Batch-11',
    text: 'Thank you so much for helping me reach my goals. The guidance and kindness from the instructors made everything better.',
  },
];

const Testmonial = () => {
  return (
    <div
      className="background py-16 px-4 md:px-20"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl shadow-2xl backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">What Our Students Say</h2>

        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          emulateTouch
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="text-white flex flex-col items-center text-center px-6">
              {/* <img
                className="w-24 h-24 object-cover rounded-full border-4 border-purple-400 shadow-md mb-6"
                src={item.img}
                alt={item.name}
              /> */}
               <img style={{height:'4rem',width:"4rem"}} className='round' src={per3} alt="" />
              <p className="text-lg italic leading-relaxed max-w-2xl">
                “{item.text}”
              </p>
              <h3 className="mt-4 text-xl font-bold text-purple-300">{item.name}</h3>
              <p className="text-sm text-gray-300">{item.batch}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testmonial;
