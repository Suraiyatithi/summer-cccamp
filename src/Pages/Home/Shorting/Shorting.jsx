// import React from 'react';


// const Shorting = ({pic}) => {
   
// const{classImg,className,enrolledStuden}=pic
//     return (
//         <div>
          
// <div className="card w-96 glass">
//   <figure><img src={classImg} alt="car!"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{className}</h2>
//     <p>Stay with Beauty.Be confident.</p>

//   </div>
// </div>
// </div>
//     );
// };

// export default Shorting;
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Shorting = ({ pic }) => {
  const { classImg, className, enrolledStuden } = pic;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div 
        className="card w-96 glass bg-purple-300 mb-12"
        style={{height:'20rem'}}
        onClick={handleCardClick}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardHover}
      >
        <figure><img src={classImg} alt="car!" /></figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Stay with Beauty. Be confident.</p>
        </div>
      </div>

      <div
        className="card w-96 glass mb-12"
        style={{height:'20rem'}}
        onClick={handleCardClick}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardHover}
      >
        <FlippedCard pic={pic} />
      </div>
    </ReactCardFlip>
  );
};

const FlippedCard = ({ pic }) => {
  const { classImg, className, enrolledStuden } = pic;

  return (
    <div className="card flipped-card w-96 glass">
      <figure><img src={classImg} alt="car!" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Stay with Beauty. Be confident.</p>
      </div>
    </div>
  );
};

export default Shorting;
