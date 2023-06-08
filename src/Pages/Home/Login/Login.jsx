import { useContext } from 'react';
import img from '../../../assets/login.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import Navimg from '../Navimg';
import Sociallogin from './Sociallogin';



const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
      console.log(data);
       
    
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    return (
        <>
       <Navimg></Navimg>
          <div className="hero min-h-screen bg-slate-50">
              <div className="hero-content flex-col lg:flex-row">
                  <div >
                      <img className='w-3/4' style={{height:''}} src={img} alt="" />
                   </div>
                  <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <h3 style={{color:"DarkOrchid"}} className='ml-6'>Please !Log In</h3>
                      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                          {/* <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Name</span>
                              </label>
                              <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                              {errors.name && <span className="text-red-600">Name is required</span>}
                          </div> */}
                          {/* <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Photo URL</span>
                              </label>
                              <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                          </div> */}
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                              {errors.email && <span className="text-red-600">Email is required</span>}
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input type="password"  {...register("password", {
                                  required: true,
                                  minLength: 6,
                                  maxLength: 20,
                                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                              })} placeholder="password" className="input input-bordered" />
                              {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                              {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                              {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                          </div>
                          <div className="form-control mt-6">
                              <input style={{background:"DarkOrchid"}} className="btn btn-primary" type="submit" value="Sign Up" />
                          </div>
                      </form>
                      <Sociallogin></Sociallogin>
                      <p><small>Do not have any account? <Link to="/signup">Signup</Link></small></p>
                     
                  </div>
              </div>
          </div>
      </>
    );
};

export default Login;