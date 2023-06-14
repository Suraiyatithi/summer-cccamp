import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
    const [history,setHistory]=useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-server-suraiyatithi.vercel.app/payments')
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
                            <th>Transection & <br></br>date</th>
                            <th>Class Name</th>
    
                         
    
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
                                <td>{item.transactionId} <br></br>
                                {item.date}</td>
                                
                                <td>{item.className}</td>
                              
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