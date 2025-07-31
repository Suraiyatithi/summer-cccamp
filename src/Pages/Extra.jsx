
// import  { useState } from 'react';
// import '../Pages/Home/Allcss/all.css'
// import { FaBeer, FaStar } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import bg from '../assets/givestar.jpg'
// import fly from '../assets/clipart514179.png'
// const Extra = () => {
    
//       const [rating, setRating] = useState(null);
    
//       const handleRatingChange = (event) => {
//         setRating(event.target.value);
//       };
    
//       const handleSubmit = () => {
//         if (rating) {
//           Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Thank You .Stay connect with us',
//             showConfirmButton: false,
//             timer: 1500
//           })
//           // Perform any actions you need with the rating value
//           console.log(`Submitted rating: ${rating}`);
//         } else {
//           // Handle the case when no rating is selected
//           console.log('Please select a rating');
//         }
//       };
    
//       return (
//             <div className="background p-5 mb-5" style={{backgroundImage:`url(${bg})`}}>
//         <section className="rate-us">
//         <div className="relative">
//       <div className='flex mx-auto lg:ml-56 -mb-10 s'>
       
//        <img className='w-36 mx-auto ' src={fly} alt="" />
//        </div>
//        <p className='text-center text-rose-900 '>___________________________________ </p>
//         <h2 className='text-2xl md:text-4xl font-bold text-center text-purple leading-tight'>Rate Us</h2>
//         <p className='text-center text-rose-900'>___________________________________</p>
//       </div>
//           <p>We would love to hear your feedback. Please take a moment to rate your experience with our website.</p>
//           <div className="rating-stars">
//             <input className='' type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
//             <label htmlFor="star5"><FaStar className='text-2xl'></FaStar></label>
//             <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
//             <label htmlFor="star4"><FaStar></FaStar></label>
//             <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
//             <label htmlFor="star3"><FaStar></FaStar></label>
//             <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
//             <label htmlFor="star2"><FaStar></FaStar></label>
//             <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
//             <label htmlFor="star1"><FaStar></FaStar></label>
//           </div>
//           <button   className="submit-button bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800" onClick={handleSubmit}>Submit</button>
//         </section>
//         </div>
//       );
//     };
    
    


// export default Extra;

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import bg from '../assets/givestar.jpg';
import fly from '../assets/clipart514179.png';

const Extra = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thank you! Stay connected with us 💜',
        showConfirmButton: false,
        timer: 1800
      });
      console.log(`Submitted rating: ${rating}`);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please select a rating before submitting!'
      });
    }
  };

  return (
    <div
      className="py-16 px-4 md:px-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl mx-auto p-8 text-center space-y-6 border border-purple-200">
        <img src={fly} alt="Fly Icon" className="w-24 mx-auto -mt-20" />
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Rate Us</h2>
        <p className="text-gray-700">
          We’d love to hear your feedback! Please take a moment to rate your experience with us.
        </p>

        {/* Star Rating */}
        <div className="flex justify-center space-x-2 text-3xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              className="transition-transform transform hover:scale-125"
            >
              <FaStar
                className={`cursor-pointer ${
                  (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-4 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:brightness-110 transition-all duration-300 shadow-lg"
        >
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default Extra;
