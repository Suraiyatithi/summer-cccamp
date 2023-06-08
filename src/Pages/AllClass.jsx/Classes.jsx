import React from 'react';

const Classes = ({classe}) => {
    const {className,classImg,instructorName,price,availableSeat,enrolledStudent}=classe
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={classImg} alt="class" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title uppercase">{className}</h2>
    <p>{instructorName}</p>
    <div className="md:flex">
        <p><small>Abailable Seats:{availableSeat}</small></p>
        <p>$<small>{price}</small></p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Classes;