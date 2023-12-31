
import  { useState } from 'react';
import '../Pages/Home/Allcss/all.css'
import { FaBeer, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import bg from '../assets/givestar.jpg'
import fly from '../assets/clipart514179.png'
const Extra = () => {
    
      const [rating, setRating] = useState(null);
    
      const handleRatingChange = (event) => {
        setRating(event.target.value);
      };
    
      const handleSubmit = () => {
        if (rating) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thank You .Stay connect with us',
            showConfirmButton: false,
            timer: 1500
          })
          // Perform any actions you need with the rating value
          console.log(`Submitted rating: ${rating}`);
        } else {
          // Handle the case when no rating is selected
          console.log('Please select a rating');
        }
      };
    
      return (
            <div className="background p-5 mb-5" style={{backgroundImage:`url(${bg})`}}>
        <section className="rate-us">
        <div className="relative">
      <div className='flex mx-auto lg:ml-56 -mb-10 s'>
       
       <img className='w-36 mx-auto ' src={fly} alt="" />
       </div>
       <p className='text-center text-rose-900 '>___________________________________ </p>
        <h2 className='text-2xl md:text-4xl font-bold text-center text-purple leading-tight'>Rate Us</h2>
        <p className='text-center text-rose-900'>___________________________________</p>
      </div>
          <p>We would love to hear your feedback. Please take a moment to rate your experience with our website.</p>
          <div className="rating-stars">
            <input className='' type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
            <label htmlFor="star5"><FaStar className='text-2xl'></FaStar></label>
            <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
            <label htmlFor="star4"><FaStar></FaStar></label>
            <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
            <label htmlFor="star3"><FaStar></FaStar></label>
            <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
            <label htmlFor="star2"><FaStar></FaStar></label>
            <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
            <label htmlFor="star1"><FaStar></FaStar></label>
          </div>
          <button   className="submit-button bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800" onClick={handleSubmit}>Submit</button>
        </section>
        </div>
      );
    };
    
    


export default Extra;