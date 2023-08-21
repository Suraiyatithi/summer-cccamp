import React from 'react';


const Shorting = ({pic}) => {
    // const styles = useSpring({
    //     from: { opacity: 0, transform: 'scale(0.5)' },
    //     to: { opacity: 1, transform: 'scale(1)' },
    //     config: { duration: 6000 }
    //   });
const{classImg,className,enrolledStuden}=pic
    return (
        <div>
            {/* <h6>{className}</h6>
     
  <div className="w-full text-center ml-11">
  <animated.img
      src={classImg}
      alt="Animated Image"
      style={styles}
    /></div>  */}
<div className="card w-96 glass">
  <figure><img src={classImg} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{className}</h2>
    <p>Stay with Beauty.Be confident.</p>
    {/* <div className="card-actions justify-end"> */}
      {/* <button className="btn btn-primary">Learn now!</button> */}
    {/* </div> */}
  </div>
</div>
</div>
    );
};

export default Shorting;