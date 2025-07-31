// import { useContext, useState } from 'react';
// import img from '../../../assets/login.jpg'
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import Swal from 'sweetalert2'
// import Navimg from '../Navimg';
// import Sociallogin from './Sociallogin';
// import { FaEye,FaEyeSlash } from 'react-icons/fa';



// const Login = () => {
//     const [show, setShow] = useState(false);
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     const onSubmit = data => {
//       console.log(data);
       
    
//         signIn(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 reset()
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }
//     return (
//         <>
//        <Navimg></Navimg>
//           <div className="hero min-h-screen bg-slate-50">
//               <div className="hero-content flex-col lg:flex-row">
//                   <div >
//                       <img className='w-3/4' style={{height:''}} src={img} alt="" />
//                    </div>
//                   <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
//                     <h3 style={{color:"DarkOrchid"}} className='ml-6'>Please !Log In</h3>
//                       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
//                           <div className="form-control">
//                               <label className="label">
//                                   <span className="label-text">Email</span>
//                               </label>
//                               <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
//                               {errors.email && <span className="text-red-600">Email is required</span>}
//                           </div>
//                           <div className="form-control">
//                               <label className="label">
//                                   <span className="label-text">Password</span>
//                               </label>
//                               <input type={show ? "text" : "password"}  {...register("password", {
//                                   required: true,
//                                   minLength: 6,
//                                   maxLength: 20,
//                                   pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
//                               })} placeholder="password" className="input input-bordered" 
                             
                              
//                               />
//                                <h1 onClick={() => setShow(!show)}><h1 className='ml-8'>
//                         {
//                             show ? <span><FaEye></FaEye></span>: <span><FaEyeSlash></FaEyeSlash></span>
//                         } 
//                          </h1></h1>
//                               {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
//                               {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
//                               {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
//                               {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
//                               <label className="label">
//                                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                               </label>
//                           </div>
//                           {/* <div className="form-control">
//                     <label htmlFor="password">Password</label>
//                     <input type={show ? "text" : "password"} name="password" id="" required />
//                     <p onClick={() => setShow(!show)}><small>
//                         {
//                             show ? <span>Hide Password</span>: <span>Show Password</span>
//                         }
//                         </small></p>
//                 </div> */}
//                           <div className="form-control mt-6">
//                               <input style={{background:"DarkOrchid"}} className="btn btn-primary" type="submit" value="Sign Up" />
//                           </div>
//                       </form>
//                       <Sociallogin></Sociallogin>
//                       <p><small>Do not have any account? <Link to="/signup">Signup</Link></small></p>
                     
//                   </div>
//               </div>
//           </div>
//       </>
//     );
// };

// export default Login;


import { useContext, useState } from 'react';
import img from '../../../assets/login.jpg';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Navimg from '../Navimg';
import Sociallogin from './Sociallogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = data => {
    signIn(data.email, data.password)
      .then(result => {
        reset();
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      });
  };

  return (
    <>
      <Navimg />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-white py-10 px-4 flex items-center justify-center">
        <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Side Image */}
          <div className="hidden md:block">
            <img src={img} alt="Login" className="w-full h-full object-cover" />
          </div>

          {/* Login Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">Welcome Back!</h2>
            <p className="text-gray-600 mb-4">Please log in to continue</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered w-full mt-1"
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">Email is required</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type={show ? 'text' : 'password'}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered w-full mt-1 pr-10"
                />
                <div
                  className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>

                {/* Error messages */}
                {errors.password?.type === 'required' && <p className="text-sm text-red-600 mt-1">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-sm text-red-600 mt-1">Minimum 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-sm text-red-600 mt-1">Max 20 characters allowed</p>}
                {errors.password?.type === 'pattern' && (
                  <p className="text-sm text-red-600 mt-1">
                    Must include uppercase, lowercase, number, and special character.
                  </p>
                )}
              </div>

              <div className="text-right text-sm">
                <Link to="#" className="text-purple-500 hover:underline">Forgot password?</Link>
              </div>

              {/* Submit */}
              <input
                type="submit"
                value="Log In"
                className="btn w-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 text-white mt-2 hover:brightness-110 transition"
              />
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <Sociallogin />
            </div>

            {/* Redirect */}
            <p className="text-center text-sm mt-4">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-purple-500 font-medium hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
