// import React from 'react';
// import img from '../../assets/clipart514179.png'
// import img1 from '../../assets/young-beautiful.jpg'
// import img2 from '../../assets/indian2.jpg';
// import img3 from '../../assets/pexels-dhally.jpg';
// import img4 from '../../assets/high-fashion.jpg';
// import img5 from '../../assets/black-woman.jpg';

// import img6 from '../../assets/beautiful-girl-stands-near-walll-with-leaves2.jpg';
// const Price = () => {
//     return (
//         <div>
//             <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
//                 <div className="">
//                 <div className="relative">
//       <div className='flex mx-auto  -mb-10  s'>
       
//        <img className='w-36 mx-auto ' src={img} alt="" />
//        </div>
     
//         <h2 className='text-2xl md:text-4xl   text-purple leading-tight'>Best Price In Town</h2>
//         <p className=' text-rose-900'>___________________________________</p>
//       </div>

// <h1 className='lg:text-5xl sm:text-xl font-bold text-rose-950 lg-mt-24 sm:mt-12 md:mt-12'>Get Up To 30% Discount</h1>

// <h1 className='mt-12 text-xl font-semibold'>ONLY FOR TODAY BETWEEN 08:00 – 11:000</h1>

// <p className='mt-8'>Beauty begins the moment you decide to be yourself.
// Nothing makes a woman more beautiful than the belief
// that she is beautiful</p>
//                 </div>
//                 <div className="bg-purple-300 rounded">
//                     <div className="lg:flex p-6">
//                         <img className='w-24 rounded-full' src={img5} alt="" />
//                         <div className="flex justify-around p-3">
//                             <p className='text-xl'>Classic Makeover </p>
//                             <p className='lg:text-lg'>_____________________________</p>
//                             <p className='text-2xl'>$40</p>
//                         </div>
//                     </div>
//                     <div className="lg:flex p-6">
//                         <img className='w-24 rounded-full' src={img2} alt="" />
//                         <div className="flex justify-around p-3">
//                             <p className='text-xl'>Beautiful HairStyle </p>
//                             <p className='text-lg' >____________________________</p>
//                             <p className='text-2xl'>$22</p>
//                         </div>
//                     </div>
//                     <div className="lg:flex p-6">
//                         <img className='w-24 rounded-full' src={img3} alt="" />
//                         <div className="flex  justify-around p-3">
//                             <p className='text-xl'>Bridal Makeover </p>
//                             <p className='text-lg'>_______________________________</p>
//                             <p className='text-2xl'>$40</p>
//                         </div>
//                     </div>
//                     <div className="lg:flex p-6">
//                         <img className='w-24 rounded-full   ' src={img6} alt="" />
//                         <div className="flex justify-around p-3">
//                             <p className='text-xl'>Stylish HairStyle </p>
//                             <p className='text-lg'>_______________________________</p>
//                             <p className='text-2xl'>$20</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Price;


import React from 'react';
import img from '../../assets/clipart514179.png';
import img1 from '../../assets/young-beautiful.jpg';
import img2 from '../../assets/indian2.jpg';
import img3 from '../../assets/pexels-dhally.jpg';
import img4 from '../../assets/high-fashion.jpg';
import img5 from '../../assets/black-woman.jpg';
import img6 from '../../assets/beautiful-girl-stands-near-walll-with-leaves2.jpg';

const services = [
  { img: img5, title: 'Classic Makeover', price: 40 },
  { img: img2, title: 'Beautiful HairStyle', price: 22 },
  { img: img3, title: 'Bridal Makeover', price: 40 },
  { img: img6, title: 'Stylish HairStyle', price: 20 },
];

const Price = () => {
  return (
    <div className="mt-20 mb-20 px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="text-left">
          <div className="mb-4">
            <img className="w-24 mx-auto lg:mx-0" src={img} alt="logo" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-2">Best Price In Town</h2>
          <p className="text-rose-400 mb-4">────────────────────────────</p>

          <h1 className="text-3xl lg:text-5xl font-bold text-rose-900 mb-6">
            Get Up To <span className="text-purple-600">30% Discount</span>
          </h1>

          <h3 className="text-lg font-semibold text-rose-700">
            ONLY FOR TODAY BETWEEN <span className="text-purple-900">08:00 – 11:00</span>
          </h3>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Beauty begins the moment you decide to be yourself. Nothing makes a woman more beautiful than the belief that she is beautiful.
          </p>
        </div>

        {/* Right Side - Services */}
        <div className="bg-purple-100 rounded-2xl shadow-xl p-6 space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img src={service.img} alt={service.title} className="w-16 h-16 rounded-full object-cover" />
                <h4 className="text-lg font-semibold text-purple-800">{service.title}</h4>
              </div>
              <span className="text-xl font-bold text-rose-600">${service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
