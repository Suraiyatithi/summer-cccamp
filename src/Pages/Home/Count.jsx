// import React from 'react';

// const Count = () => {
//     return (
//         <div>
//             <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
//   <div className="flex flex-col p-2 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":15}}></span>
//     </span>
//     days
//   </div> 
//   <div className="flex flex-col p-2 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":10}}></span>
//     </span>
//     hours
//   </div> 
//   <div className="flex flex-col p-2 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":24}}></span>
//     </span>
//     min
//   </div> 
//   <div className="flex flex-col p-2 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":41}}></span>
//     </span>
//     sec
//   </div>
// </div>
//         </div>
//     );
// };

// export default Count;
import React, { useState, useEffect } from 'react';

const Count = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(41);

  useEffect(() => {
    // Function to update the countdown values
    const updateCountdown = () => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        // Countdown is finished, you can handle this case if needed
        return;
      }

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

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-5 text-center">
        <div className="flex flex-col p-2 md:p-5  md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
          <span className="countdown font-mono text-4xl md:text-5xl">
            <span style={{ "--value": days }}></span>
          </span>
          +Classes
        </div>
        <div className="flex flex-col p-2 md:p-5 md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
          <span className="countdown font-mono text-4xl md:text-5xl">
            <span style={{ "--value": hours }}></span>
          </span>
          +Instructor
        </div>
        <div className="flex flex-col p-2 md:p-5 md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
          <span className="countdown font-mono text-4xl md:text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          +Student
        </div>
        <div className="flex flex-col p-2 md:p-5 md:pl-12 md:pr-12 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 rounded-box text-neutral-content">
          <span className="countdown font-mono text-4xl md:text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          Enrolled
        </div>
      </div>
    </div>
  );
};

export default Count;

