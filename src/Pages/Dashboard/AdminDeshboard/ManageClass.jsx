import React, { useState } from 'react';
import useQuerys from '../../../Hooks/useQuery';

import { FaCaretRight, FaCross } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const [classes,refetch]=useQuerys();
    const [feedback, setFeedback] = useState('');
    const [selectedClassId, setSelectedClassId] = useState('');
    const openFeedbackModal = (classId) => {
        setSelectedClassId(classId);
        setFeedback('');
      };
    
      const closeFeedbackModal = () => {
        setSelectedClassId('');
        setFeedback('');
      };
    
      const submitFeedback = () => {
        fetch(`https://summer-camp-server-suraiyatithi.vercel.app/classes/feedback/${selectedClassId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedback }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            closeFeedbackModal();
            if(result.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `  Feedback added!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
    const handleApproved=(item)=>{
        fetch(`https://summer-camp-server-suraiyatithi.vercel.app/classes/approved/${item._id}`, {
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
        fetch(`https://summer-camp-server-suraiyatithi.vercel.app/classes/deny/${item._id}`, {
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
                                         <td><button onClick={() => openFeedbackModal(item._id)}>Provide Feedback</button></td>
                              
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
                {selectedClassId && (
        <div
          id='feedbackModal'
          className='fixed inset-0 flex items-center justify-center z-50'
        >
          <div className='bg-blue-300 rounded-lg p-6'>
            <div className='mb-4'>
              <label htmlFor='feedbackInput' className='font-semibold'>
                Feedback:
              </label>
              <textarea
                id='feedbackInput'
                className='form-textarea mt-1 p-8'
                placeholder='Enter your feedback...'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <button onClick={submitFeedback} className='btn bg-rose-900'>
                Submit
              </button>
              <button onClick={closeFeedbackModal} className='btn bg-rose-900 ml-2'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
    );
};

export default ManageClass;