import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [history,setHistory]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/payments')
        .then(res=>res.json())
        .then(data=>{
            setHistory(data)
        })

    },[])
    return (
        <div>
                       <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transection</th>
                            <th>Class Name</th>
    
                         <th>Date</th>
    
                         <th>Email</th>
                         <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((item,index)=>
                            <tr key={item._id}
                            
                            >
                                <td>{index +1}</td>
                                <td>{item.transactionId}</td>
               
                                
                                <td>{item.className}</td>
                                <td>{item.date}</td>
                          <td>{item.email}</td>
                                <td>{item.status}</td>
                             
                            
                            </tr>
                            )
                        }
                    </tbody>

                </table>
        </div>
    );
};

export default PaymentHistory;