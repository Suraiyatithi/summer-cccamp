
import React, { useEffect, useState } from 'react';
import useQuerys from '../../../Hooks/useQuery';

const Enrolled = () => {
    const [classes]=useQuerys();
    const [history,setHistory]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/payments')
        .then(res=>res.json())
        .then(data=>{
            setHistory(data)
        }) },[])

        const filteredData = classes.filter(item => history.some(obj => obj.className === item.className));
console.log(filteredData)

    return (
        <div>
               <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
    
                            <th>Price</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((item,index)=>
                            <tr key={item._id}
                            
                            >
                                <td>{index +1}</td>
                                <td>
<div className="avatar">
<div className="mask mask-squircle w-12 h-12">
    <img src={item.classImg} alt="" />
</div>
</div>
                                </td>
                                <td>{item.className}</td>
                                {/* <td>{item.instructorName}</td> */}
                                <td>{item.price}</td>
                              </tr>
                            )
                        }
                    </tbody>

                </table>
        </div>
    );
};

export default Enrolled;