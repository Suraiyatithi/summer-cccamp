// import { useContext, useState } from "react";
// import img from '../../../assets/login.jpg'
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import Navimg from "../Navimg";
// import Sociallogin from "./Sociallogin";

// const Signup = () => {

//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [error,seterror]=useState('')
//     const onSubmit = data => {
//         console.log(data);
//         if(data.password!==data.confirm){
//             seterror('Your Passwlord did not match');
//             return
//         }
//         createUser(data.email, data.password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 updateUserProfile(data.name, data.photoURL)
//                 .then(() => {
//                     const saveUser = { name: data.name, email: data.email }
//                     fetch('https://summer-camp-server-suraiyatithi.vercel.app/users', {
//                         method: 'POST',
//                         headers: {
//                             'content-type': 'application/json'
//                         },
//                         body: JSON.stringify(saveUser)
//                     })
//                         .then(res => res.json())
//                         .then(data => {
//                             if (data.insertedId) {
//                                 reset();
//                                 Swal.fire({
//                                     position: 'top-end',
//                                     icon: 'success',
//                                     title: 'User created successfully.',
//                                     showConfirmButton: false,
//                                     timer: 1500
//                                 });
//                                 navigate('/');
//                             }
//                         })



//                 })
//                 .catch(error => console.log(error))
//         })
// };

//     return (
//         <>
//       <Navimg></Navimg>
//         <div className="hero min-h-screen bg-slate-50">
//             <div className="hero-content flex-col lg:flex-row">
//                 <div >
//                     <img className="w-3/4" src={img} alt="" />
//                  </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
//                 <h2  style={{color:"DarkOrchid"}} className='ml-6'>Please !Sign up</h2>
//                     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
//                             {errors.name && <span className="text-red-600">Name is required</span>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Photo URL</span>
//                             </label>
//                             <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
//                             {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
//                             {errors.email && <span className="text-red-600">Email is required</span>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password"  {...register("password", {
//                                 required: true,
//                                 minLength: 6,
//                                 maxLength: 20,
//                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
//                             })} placeholder="password" className="input input-bordered" />
//                             {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
//                             {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
//                             {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
//                             {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Confirm Password</span>
//                             </label>
//                             <input type="password"  {...register("confirm", { required: true })} name="confirm" placeholder="confirm password" className="input input-bordered" />
//                            <p className="text-danger">{error}</p>
//                         </div>
//                         <div className="form-control mt-6">
//                             <input style={{background:"DarkOrchid"}} className="btn btn-primary" type="submit" value="Sign Up" />
//                         </div>
//                     </form>
//                     <Sociallogin></Sociallogin>
//                     <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                    
//                 </div>
//             </div>
//         </div>
        
//     </>
//     );
// };

// export default Signup;

import { useContext, useState } from "react";
import img from "../../../assets/login.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navimg from "../Navimg";
import Sociallogin from "./Sociallogin";

const Signup = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = data => {
    if (data.password !== data.confirm) {
      setError('Passwords do not match');
      return;
    }

    createUser(data.email, data.password)
      .then(result => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch('https://summer-camp-server-suraiyatithi.vercel.app/users', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              });
          })
          .catch(error => console.log(error));
      });
  };

  return (
    <>
      <Navimg />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-white flex items-center justify-center py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Left Image */}
          <div className="hidden md:block">
            <img src={img} alt="Sign Up" className="w-full h-full object-cover" />
          </div>

          {/* Right Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Create Your Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered w-full mt-1" />
                {errors.name && <p className="text-sm text-red-600 mt-1">Name is required</p>}
              </div>

              {/* Photo URL */}
              <div>
                <label className="text-sm font-medium text-gray-700">Photo URL</label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Your Photo URL" className="input input-bordered w-full mt-1" />
                {errors.photoURL && <p className="text-sm text-red-600 mt-1">Photo URL is required</p>}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" {...register("email", { required: true })} placeholder="Email address" className="input input-bordered w-full mt-1" />
                {errors.email && <p className="text-sm text-red-600 mt-1">Email is required</p>}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
                  placeholder="Create password"
                  className="input input-bordered w-full mt-1"
                />
                {errors.password?.type === 'required' && <p className="text-sm text-red-600 mt-1">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-sm text-red-600 mt-1">Minimum 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-sm text-red-600 mt-1">Max 20 characters allowed</p>}
                {errors.password?.type === 'pattern' && <p className="text-sm text-red-600 mt-1">Must include uppercase, lowercase, number, and special character</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" {...register("confirm", { required: true })} placeholder="Confirm password" className="input input-bordered w-full mt-1" />
                {errors.confirm && <p className="text-sm text-red-600 mt-1">Please confirm your password</p>}
                {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
              </div>

              {/* Submit */}
              <input type="submit" value="Sign Up" className="btn w-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-white hover:brightness-110 mt-2" />
            </form>

            <div className="mt-5">
              <Sociallogin />
            </div>

            <p className="text-center text-sm mt-4">
              Already have an account? <Link to="/login" className="text-purple-500 font-medium hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
