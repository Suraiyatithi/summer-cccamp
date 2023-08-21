
import { useContext } from 'react';
import useCart from '../../Hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Classes = ({classe}) => {
    const {className,classImg,instructorName,price,availableSeat,enrolledStudent,_id}=classe;
const [,refetch]=useCart();
const navigate=useNavigate();
const location=useLocation();
const {user}=useContext(AuthContext);



    const handleAddtoCart = classe =>{
console.log(classe)
if(user && user.email){
  const cartitem={classId:_id,email:user.email,className,classImg,instructorName,price,availableSeat,enrolledStudent}
  fetch('https://summer-camp-server-suraiyatithi.vercel.app/carts',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(cartitem)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      refetch();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'class added on the cart.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}
else{
  Swal.fire({
      title: 'Please login to select classs',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login now!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', {state: {from: location}})
      }
    })
}
}
    
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={classImg} alt="class" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title uppercase">{className}</h2>
    <p>{instructorName}</p>
    <div className="md:flex gap-3">
        <p><small>Abailable Seats:{availableSeat}</small></p>
        <p>$<small>{price}</small></p>
    </div>
    <div className="card-actions">
      <button  onClick={() => handleAddtoCart(classe)} className="btn text-white bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">Select</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Classes;