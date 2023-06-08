import React, { useEffect, useState } from 'react';
import Shorting from './Shorting/Shorting';


const PopularClass = () => {
    const [classpic,setclasspic]=useState([])

    const sortedStudents = classpic.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
    const topSixStudents = sortedStudents.slice(0, 6);
    // console.log(topSixStudents)
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then((data)=>{
      
            setclasspic(data)
        })
    })

    return (
        <div>
          <h3 className='text-center'>POPULAR CLASSESS</h3> 
<div className='grid grid-cols-1 md:grid-cols-3 text-center m-8'>
{
        topSixStudents.map(pic=><Shorting key={pic._id} pic={pic}></Shorting>)
}
       </div>
       
        </div>
    );
};

export default PopularClass;