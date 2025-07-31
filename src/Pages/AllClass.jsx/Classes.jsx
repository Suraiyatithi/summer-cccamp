
// import { useContext } from 'react';
// import useCart from '../../Hooks/useCart';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../Providers/AuthProvider';

// const Classes = ({classe}) => {
//     const {className,classImg,instructorName,price,availableSeat,enrolledStudent,_id}=classe;
// const [,refetch]=useCart();
// const navigate=useNavigate();
// const location=useLocation();
// const {user}=useContext(AuthContext);



//     const handleAddtoCart = classe =>{
// console.log(classe)
// if(user && user.email){
//   const cartitem={classId:_id,email:user.email,className,classImg,instructorName,price,availableSeat,enrolledStudent}
//   fetch('https://summer-camp-server-suraiyatithi.vercel.app/carts',{
//     method:'POST',
//     headers:{
//       'content-type':'application/json'
//     },
//     body:JSON.stringify(cartitem)
//   })
//   .then(res=>res.json())
//   .then(data=>{
//     if(data.insertedId){
//       refetch();
//       Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'class added on the cart.',
//         showConfirmButton: false,
//         timer: 1500
//       })
//     }
//   })
// }
// else{
//   Swal.fire({
//       title: 'Please login to select classs',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Login now!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate('/login', {state: {from: location}})
//       }
//     })
// }
// }
    
//     return (
//         <div>
//            <div className="card w-96 bg-base-100 shadow-xl">
//   <figure className="px-10 pt-10">
//     <img src={classImg} alt="class" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title uppercase">{className}</h2>
//     <p>{instructorName}</p>
//     <div className="md:flex gap-3">
//         <p><small>Abailable Seats:{availableSeat}</small></p>
//         <p>$<small>{price}</small></p>
//     </div>
//     <div className="card-actions">
//       <button  onClick={() => handleAddtoCart(classe)} className="btn text-white bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">Select</button>
//     </div>
//   </div>
// </div> 
//         </div>
//     );
// };

// export default Classes;
import { useContext } from 'react';
import useCart from '../../Hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Classes = ({ classe }) => {
  const { className, classImg, instructorName, price, availableSeat, enrolledStudent, _id } = classe;
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleAddtoCart = (classe) => {
    if (user && user.email) {
      const cartItem = {
        classId: _id,
        email: user.email,
        className,
        classImg,
        instructorName,
        price,
        availableSeat,
        enrolledStudent,
      };

      fetch('https://summer-camp-server-suraiyatithi.vercel.app/carts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class added to cart!',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to select this class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6b21a8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-purple-100">
        {/* Image */}
        <div className="h-52 overflow-hidden">
          <img
            src={classImg}
            alt={className}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details */}
        <div className="p-5 text-center">
          <h2 className="text-xl font-bold uppercase text-purple-700">{className}</h2>
          <p className="text-gray-600 text-sm">Instructor: <span className="font-medium">{instructorName}</span></p>

          <div className="flex justify-center gap-6 text-sm text-gray-700 my-2">
            <span className="bg-purple-100 px-3 py-1 rounded-full">Seats: {availableSeat}</span>
            <span className="bg-purple-100 px-3 py-1 rounded-full">${price}</span>
          </div>

          <button
            onClick={() => handleAddtoCart(classe)}
            className="mt-4 w-full py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:brightness-110 transition duration-300"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
