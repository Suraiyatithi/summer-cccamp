import React from 'react';
import useQuerys from '../../../Hooks/useQuery';

import { FaCaretRight, FaCross } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const [classes,refetch]=useQuerys();

    const handleApproved=(item)=>{
        fetch(`http://localhost:5000/classes/approved/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `  Approved !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDeny=(item)=>{
        fetch(`http://localhost:5000/classes/deny/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ` Deny!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='my-4'>
            <h2 className='mt-12 text-center bg-rose-900 text-3xl font-semibold my-4'>Manage Tha Classes </h2>
                 <table className="table table-zebra  p-5 mt-11">
        
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name <br />Email</th>
                     
                            <th>Email</th>
                            <th>Available Seat <br />Price</th>
                    
                            <th>status</th>
                            <th>Feedback</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                <div className="avatar">
<div className="mask mask-squircle w-12 h-12">
    <img src={item.classImg} alt="" />
</div>
</div>
                                </td>
                                <td>{item.className}</td>
                                <td>{item.instructorName} <br />
                                {item.email}</td>
                                <td>Seat:{item.availableSeat} <br />
                                Price:${item.price}</td>
                                <td>
                                    <div>{ item.status === 'approved' ? 'approved' :
                                    <button onClick={() => handleApproved(item)} className="btn btn-ghost bg-rose-900  text-white"><FaCaretRight></FaCaretRight></button> 
                                    }</div>
                                    <div>
                                         {item.status === 'deny' ? 'deny' :
                                         <button onClick={() => handleDeny(item)} className="btn btn-ghost bg-rose-900  text-white"><FaCross></FaCross></button> 
                                         }
                                         </div></td>
                                         <td>{item.feedback}</td>

                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
        </div>
    );
};

export default ManageClass;