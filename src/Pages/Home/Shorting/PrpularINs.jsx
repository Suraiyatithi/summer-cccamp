
// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import { FaBeer, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// const PrpularINs = ({ pic }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const styles = useSpring({
//     from: { opacity: 0, transform: 'scale(0.5)' },
//     to: { opacity: 1, transform: 'scale(1)' },
//     config: { duration: 6000 }
//   });

//   const { instructorImg, instructorName } = pic;

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleTouchStart = () => {
//     setIsHovered(true);
//   };

//   const handleTouchEnd = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div>
      
//       <div
//         className=" carousel-item w-full text-center ml-11"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//         style={{
//           position: 'relative',
//           overflow: 'hidden',
//           borderRadius: '8px',
//           boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
//         }}
//       >
//         <animated.img
//           src={instructorImg}
//           alt="Animated Image"
//           style={{
//             ...styles,
//             filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
//             transition: 'filter 0.3s ease',
//           }}
//         />
//         {isHovered && (
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               color: '#fff',
//               fontSize: '24px',
//             }}
//           >
//             {instructorName}
//           <br />
//           <FaFacebookF></FaFacebookF>
//           <FaInstagram></FaInstagram>
//           <FaWhatsapp></FaWhatsapp>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PrpularINs;



import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PrpularINs = ({ pic }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { instructorImg, instructorName } = pic;

  const styles = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 1000 },
  });

  return (
    <div
      className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <animated.img
        src={instructorImg}
        alt={instructorName}
        style={{
          ...styles,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: isHovered ? 'brightness(0.5)' : 'brightness(1)',
          transition: 'filter 0.4s ease',
        }}
      />

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white transition-opacity duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-2">{instructorName}</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-pink-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-400"><FaWhatsapp /></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrpularINs;

