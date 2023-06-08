import React, { useEffect, useState } from 'react';

const PopularClass = () => {
    const [classpic,setclasspic]=useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    })
    return (
        <div>
          <h3 className='text-center'>POPULAR CLASSESS</h3>  
        </div>
    );
};

export default PopularClass;