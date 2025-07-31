// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// const Inst = ({inst}) => {
//     const{instructorImg,instructorName,email,className}=inst;
//     const styles = useSpring({
//         from: { opacity: 0, transform: 'scale(0.5)' },
//         to: { opacity: 1, transform: 'scale(1)' },
//         config: { duration: 6000 }
//       });
//     return (
//         <div>

//               <div className="md:flex justify-center   style={styles} shadow-2xl  border px-3 py-7 mb-4 items-center bg-opacity-60">
//                 <div>
//                     <img style={{height:"10rem" ,width:"15rem"}} src={instructorImg} alt="" />
//                 </div>
//                 <div className="md:ml-2">
                  
//                     <p className="uppercase">{instructorName}</p>
//                     <p>{email}</p>
//                     <p>{className}</p>
//                     <button  className="btn btn-outline text-white border-0 border-b-4 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 mt-4 ">See classes</button>
//                 </div>
//             </div>   
//         </div>
//     );
// };

// export default Inst;

import React from 'react';
import { useSpring, animated } from 'react-spring';

const Inst = ({ inst }) => {
  const { instructorImg, instructorName, email, className } = inst;

  // Animation styles
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(50px) scale(0.9)' },
    to: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    config: { tension: 120, friction: 20 },
  });

  return (
    <animated.div style={styles} className="p-4">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 via-purple-100 to-white backdrop-blur-md border border-purple-200 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out p-6 md:flex items-center gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={instructorImg}
            alt={instructorName}
            className="rounded-lg object-cover shadow-md w-60 h-40"
          />
        </div>

        {/* Info */}
        <div className="flex-1 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-purple-800 uppercase">{instructorName}</h2>
          <p className="text-sm text-gray-600 mb-1">{email}</p>
          <p className="text-md text-purple-600 font-medium">{className}</p>

          <button className="mt-4 px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:brightness-110 transition">
            See Classes
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Inst;
