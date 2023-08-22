import  { useEffect, useState } from 'react';
import Shorting from './Shorting/Shorting';
import PrpularINs from './Shorting/PrpularINs';


const PopularClass = () => {
    const [classpic,setclasspic]=useState([])

    const sortedStudents = classpic.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
    const topSixStudents = sortedStudents.slice(0, 6);
    // console.log(topSixStudents)
    useEffect(()=>{
        fetch('https://summer-camp-server-suraiyatithi.vercel.app/classes')
        .then(res=>res.json())
        .then((data)=>{
      
            setclasspic(data)
        })
    })

    return (
        <div>
         <p className='text-center text-rose-900'>___________________________________</p>
          <h2 className='text-2xl md:text-4xl font-bold text-center text-purple leading-tight'>Popular Class</h2>
          <p className='text-center text-rose-900'>___________________________________</p>
<div className='grid grid-cols-1 md:grid-cols-3 text-center m-8'>
{
        topSixStudents.map(pic=><Shorting key={pic._id} pic={pic}></Shorting>)
}
       </div>
       

       <div className="">
       <p className='text-center '>___________________________________</p>
          <h2 className='text-center text-2xl md:text-4xl font-bold text-purple leading-tight'>Popular Instructor</h2>
          <p className='text-center'>___________________________________</p>
        <div className="grid grid-cols-1 md:grid-cols-6 text-center mt-8 text-center mb-8">
        {
        topSixStudents.map(pic=><PrpularINs key={pic._id} pic={pic}></PrpularINs>)
}
    
        </div>
       </div>
        </div>
    );
};

export default PopularClass;