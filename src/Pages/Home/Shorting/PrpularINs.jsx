import React from 'react';
import { useSpring, animated } from 'react-spring';


const PrpularINs = ({pic}) => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 6000 }
      });
const{instructorImg,instructorName}=pic
    return (
        <div>
            <h6>{instructorName}</h6>
     
  <div className="w-full text-center ml-11">
  <animated.img
      src={instructorImg}
      alt="Animated Image"
      style={styles}
    /></div> 
</div>
    );
};

export default PrpularINs;