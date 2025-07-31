import React from 'react';
import bg from '../../assets/summer-contact.jpg'
import bg2 from '../../assets/pink-glitters.jpg'
import { Link } from 'react-router-dom';
import './Allcss/all.css';

const Contact = () => {
    return (
        <div className="background p-5 lg:mb-24 sm:mb-5 lg:mt-24 mt-5" style={{backgroundImage:`url(${bg})`}}>
       <div style={{height:"20rem"}} className="">
       <h1 className='lg:text-5xl sm:text-xl font-bold mt-12 text-white text-center'>Get 40% Discount In Each  Class <br /> Only For Today </h1>
      <div className="text-center pt-12">
     <Link to='/allclass'> <button className='btn bg-purple-300 text-white' >Enrol Now</button></Link>
      </div>
       </div>
            
        </div>
    );
};

export default Contact;