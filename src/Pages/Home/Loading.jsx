// import React from 'react';
// import './Allcss/all.css' // Import your CSS styles for the loading animation

// const Loading = () => {
//   return (
//     <div className="loading">
//       <div className="loading-animation">

//       </div>
//       <h1 className='text-4xl text-purple-700 font-bold '>Welcome to My Site</h1>
//     </div>
//   );
// };

// export default Loading;
import React from 'react';
import './Allcss/all.css'; // Keep this if you want extra styles, or remove if unused.

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <div className="w-20 h-20 border-8 border-purple-400 border-t-transparent rounded-full animate-spin mb-6 shadow-lg"></div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 animate-pulse drop-shadow-md text-center">
        Welcome to My Site
      </h1>
      <p className="text-sm mt-2 text-gray-500">Loading your beautiful experience...</p>
    </div>
  );
};

export default Loading;
