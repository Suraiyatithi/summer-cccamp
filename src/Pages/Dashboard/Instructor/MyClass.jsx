import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useQuerys from '../../../Hooks/useQuery';
import { FaEdit } from 'react-icons/fa';

const MyClass = () => {
    const {user}=useContext(AuthContext);
    const [classes]=useQuerys();
    const filteredData = classes.filter(item => item.email === user?.email);

    return (
        <div>
            <h2 className='text-center bg-rose-900 text-white'>YOUR ADDED CLASSS:{filteredData.length}</h2>
            <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
    
                         <th>Status</th>
    
                         <th>Update</th>
                         <th>Feedback</th>
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
                          
                                <td>{item.status}</td>
                                <td><button ><FaEdit></FaEdit></button></td>
                                <td>{item.feedback}</td>
                            
                            </tr>
                            )
                        }
                    </tbody>

                </table>
        </div>
    );
};

export default MyClass;