// import React from 'react';
// import { useSpring, animated } from 'react-spring';




// const PrpularINs = ({pic}) => {
//     const styles = useSpring({
//         from: { opacity: 0, transform: 'scale(0.5)' },
//         to: { opacity: 1, transform: 'scale(1)' },
//         config: { duration: 6000 }
//       });
// const {instructorImg,instructorName}=pic
//     return (
//         <div>
            
//             <h6>{instructorName}</h6>
     
//   <div className="w-full text-center ml-11">
//   <animated.img
//       src={instructorImg}
//       alt="Animated Image"
//       style={styles}
//     /></div> 
      
// </div>
//     );
// };

// export default PrpularINs;
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaBeer, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PrpularINs = ({ pic }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 6000 }
  });

  const { instructorImg, instructorName } = pic;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div>
      
      <div
        className=" carousel-item w-full text-center ml-11"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }}
      >
        <animated.img
          src={instructorImg}
          alt="Animated Image"
          style={{
            ...styles,
            filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
            transition: 'filter 0.3s ease',
          }}
        />
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            {instructorName}
          <br />
          <FaFacebookF></FaFacebookF>
          <FaInstagram></FaInstagram>
          <FaWhatsapp></FaWhatsapp>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrpularINs;


