import React, { useEffect, useState } from 'react';
import useCart from '../../../Hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyselectClass = () => {
    const [carts,refetch]=useCart();
    console.log(carts);
  
    const [history,setHistory]=useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-server-suraiyatithi.vercel.app/payments')
        .then(res=>res.json())
        .then(data=>{
            setHistory(data)
        }) },[])

        const filteredData = carts.filter(item => !history.some(obj => obj.className === item.className));
console.log(filteredData)


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-suraiyatithi.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <h3 className='text-center bg-rose-900 text-white'>Selected Class:{carts.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
    
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
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
                                <td><button onClick={()=>handleDelete(item)}><FaTrash></FaTrash></button></td>
                                <td><Link to={`/dashboard/payment/${item._id}`}><button className='btn bg-rose-900'>pay</button></Link></td>
                            </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyselectClass;