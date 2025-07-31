
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
// import React, { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';
// import { FaUsers, FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Shorting = ({ pic }) => {
//   const { _id, classImg, className, enrolledStudent } = pic;
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//       {/* Front Side */}
//       <div
//         className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
//         onMouseEnter={() => setIsFlipped(true)}
//         onMouseLeave={() => setIsFlipped(false)}
//       >
//         <img
//           src={classImg}
//           alt={className}
//           className="object-cover w-full h-full"
//         />
//         <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
//           <h3 className="text-white text-xl font-bold truncate">
//             {className}
//           </h3>
//         </div>
//       </div>

//       {/* Back Side */}
//       <div
//         className="flex flex-col items-center justify-center w-full max-w-sm h-80 rounded-2xl bg-white shadow-lg cursor-pointer p-6 transform transition-transform hover:scale-105"
//         onMouseEnter={() => setIsFlipped(false)}
//         onMouseLeave={() => setIsFlipped(false)}
//       >
//         <FaUsers className="text-4xl text-purple-600 mb-2" />
//         <p className="text-3xl font-extrabold text-purple-700 mb-1">
//           {enrolledStudent}+
//         </p>
//         <p className="text-gray-500 mb-4 text-center px-2">
//           Students Enrolled
//         </p>
//         <Link
//           to={`/class/${_id}`}
//           className="mt-auto inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:brightness-110 transition"
//         >
//           View Class <FaArrowRight className="ml-2" />
//         </Link>
//       </div>
//     </ReactCardFlip>
//   );
// };

// export default Shorting;
