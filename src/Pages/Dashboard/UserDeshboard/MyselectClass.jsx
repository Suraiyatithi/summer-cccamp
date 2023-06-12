import React from 'react';
import useCart from '../../../Hooks/useCart';

const MyselectClass = () => {
    const [cart,refetch]=useCart();
    console.log(cart);


    return (
        <div>
            <h3 className='text-center bg-rose-900 text-white'>Selected Class:{cart.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index)=>
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
                                <td>{item.instructorName}</td>
                                <td>{item.price}</td>
                                <td><button className='btn bg-rose-900'>pay</button></td>
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