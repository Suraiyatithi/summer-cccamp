import React from 'react';
import img1 from '../../assets/photo1.jpg';
import img2 from '../../assets/photo22.jpg';
import img3 from '../../assets/photo3.jpg';
import img4 from '../../assets/photo4.jpg'

const Photo = () => {
    return (
        <div className='mt-24 mb-24'>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
                <div className="">
                    <img src={img4} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Photo;