import React from 'react';
import React, { useState } from 'react';

const Extra = () => {
    
      const [rating, setRating] = useState(null);
    
      const handleRatingChange = (event) => {
        setRating(event.target.value);
      };
    
      const handleSubmit = () => {
        if (rating) {
          // Perform any actions you need with the rating value
          console.log(`Submitted rating: ${rating}`);
        } else {
          // Handle the case when no rating is selected
          console.log('Please select a rating');
        }
      };
    
      return (
        <section className="rate-us">
          <h2>Rate Us</h2>
          <p>We would love to hear your feedback. Please take a moment to rate your experience with our website.</p>
          <div className="rating-stars">
            <input type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
            <label htmlFor="star5">5 stars</label>
            <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
            <label htmlFor="star4">4 stars</label>
            <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
            <label htmlFor="star3">3 stars</label>
            <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
            <label htmlFor="star2">2 stars</label>
            <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
            <label htmlFor="star1">1 star</label>
          </div>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </section>
      );
    };
    
    


export default Extra;