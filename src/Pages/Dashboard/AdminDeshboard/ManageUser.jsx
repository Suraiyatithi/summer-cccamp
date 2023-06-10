import React from 'react';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaChalkboardTeacher, FaChessKing } from 'react-icons/fa';

const ManageUser = () => {
  const  [axiossecure]=AxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiossecure.get('/users')

    return res.data;
   
})
console.log(users)
const handlemakeadmin=(user)=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
const handlemakeinstructor=(user)=>{
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                title: `${user.name} is an instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
    return (
        <div>
            
        
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handlemakeadmin(user)} className="btn btn-ghost bg-rose-900  text-white"><FaChessKing></FaChessKing></button> 
                                    }</td>
                                         <td>{ user.role === 'instructor' ? 'instructor' :
                                         <button onClick={() => handlemakeinstructor(user)} className="btn btn-ghost bg-rose-900  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button> 
                                         }</td>

                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;