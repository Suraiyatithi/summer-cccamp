
// import React, { useState, useEffect } from 'react';

// const Count = () => {
//   const [days, setDays] = useState(15);
//   const [hours, setHours] = useState(10);
//   const [minutes, setMinutes] = useState(24);
//   const [seconds, setSeconds] = useState(41);

//   useEffect(() => {
//     // Function to update the countdown values
//     const updateCountdown = () => {
//       if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//         // Countdown is finished, you can handle this case if needed
//         return;
//       }

//       let updatedDays = days;
//       let updatedHours = hours;
//       let updatedMinutes = minutes;
//       let updatedSeconds = seconds - 1;

//       if (updatedSeconds < 0) {
//         updatedMinutes -= 1;
//         updatedSeconds = 59;

//         if (updatedMinutes < 0) {
//           updatedHours -= 1;
//           updatedMinutes = 59;

//           if (updatedHours < 0) {
//             updatedDays -= 1;
//             updatedHours = 23;
//           }
//         }
//       }

//       setDays(updatedDays);
//       setHours(updatedHours);
//       setMinutes(updatedMinutes);
//       setSeconds(updatedSeconds);
//     };

//     // Update the countdown every second
//     const interval = setInterval(updateCountdown, 1000);

//     // Clean up the interval when the component is unmounted
//     return () => clearInterval(interval);
//   }, [days, hours, minutes, seconds]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div className="grid grid-cols-4 md:grid-cols-4 gap-5 text-center">
//         <div className="flex flex-col p-2 md:p-5  md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//           <span className="countdown font-mono text-4xl md:text-5xl">
//             <span style={{ "--value": days }}></span>
//           </span>
//           Days
//         </div>
//         <div className="flex flex-col p-2 md:p-5 md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//           <span className="countdown font-mono text-4xl md:text-5xl">
//             <span style={{ "--value": hours }}></span>
//           </span>
//           Hours
//         </div>
//         <div className="flex flex-col p-2 md:p-5 md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//           <span className="countdown font-mono text-4xl md:text-5xl">
//             <span style={{ "--value": minutes }}></span>
//           </span>
//           Minutes
//         </div>
//         <div className="flex flex-col p-2 md:p-5 md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//           <span className="countdown font-mono text-4xl md:text-5xl">
//             <span style={{ "--value": seconds }}></span>
//           </span>
//           Seconds
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Count;

import React, { useState, useEffect } from 'react';

const Count = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(41);

  useEffect(() => {
    const updateCountdown = () => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) return;

      let updatedDays = days;
      let updatedHours = hours;
      let updatedMinutes = minutes;
      let updatedSeconds = seconds - 1;

      if (updatedSeconds < 0) {
        updatedMinutes -= 1;
        updatedSeconds = 59;

        if (updatedMinutes < 0) {
          updatedHours -= 1;
          updatedMinutes = 59;

          if (updatedHours < 0) {
            updatedDays -= 1;
            updatedHours = 23;
          }
        }
      }

      setDays(updatedDays);
      setHours(updatedHours);
      setMinutes(updatedMinutes);
      setSeconds(updatedSeconds);
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  const boxClass =
    "flex flex-col items-center justify-center p-5 w-28 md:w-36 rounded-xl shadow-lg bg-gradient-to-tr from-purple-200 via-purple-500 to-purple-800 text-white border-2 border-white border-opacity-30 backdrop-blur-sm transition hover:scale-105 hover:shadow-pink-500";

  return (
    <div className="flex justify-center items-center py-10 bg-[url('/path-to-your-bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-up">
        <div className={boxClass}>
          <span className="text-5xl font-extrabold tracking-widest drop-shadow-md glow-text">
            {String(days).padStart(2, '0')}
          </span>
          <span className="mt-2 uppercase font-semibold text-sm tracking-wide">Days</span>
        </div>
        <div className={boxClass}>
          <span className="text-5xl font-extrabold tracking-widest drop-shadow-md glow-text">
            {String(hours).padStart(2, '0')}
          </span>
          <span className="mt-2 uppercase font-semibold text-sm tracking-wide">Hours</span>
        </div>
        <div className={boxClass}>
          <span className="text-5xl font-extrabold tracking-widest drop-shadow-md glow-text">
            {String(minutes).padStart(2, '0')}
          </span>
          <span className="mt-2 uppercase font-semibold text-sm tracking-wide">Minutes</span>
        </div>
        <div className={boxClass}>
          <span className="text-5xl font-extrabold tracking-widest drop-shadow-md glow-text">
            {String(seconds).padStart(2, '0')}
          </span>
          <span className="mt-2 uppercase font-semibold text-sm tracking-wide">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Count;
