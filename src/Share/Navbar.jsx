import { Button } from 'react-daisyui';
import logo from '../assets/download.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOption =<>
     <li><Link>Home</Link></li>
     <li><Link to='/instructor'>Instructor </Link></li> 
      <li><Link to='/allclass'>Classess</Link></li>
      <li><Link to='/instructor'>Popular</Link></li> 
      <li><Link to='/instructor'>Offer</Link></li> 
      <li><Link to='/instructor'>Blog</Link></li> 
     {
        user && 
        <li><Link to='/dashboard'>DashBoard</Link></li>
     }
     
      {
            user ? <>
                <span>{user?.displayName}</span>
                <button  onClick={handleLogOut} className="btn bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">Log out</button>
            </> : <>
                <li><Link to="/login"><Button className='btn bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800'>Log In</Button></Link></li>
            </>
        }
    </>
  return(
      <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-dark rounded-box w-52">
                      {navOption}
                  </ul>
              </div>
              <img className='rounded-full' style={{height:"4rem"}} src={logo} alt="" />
              <a className="btn btn-ghost normal-case text-xl">MAKEUP SCHOLLING</a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  {navOption}
              </ul>
          </div>
          <div className="navbar-end">
        {
            user &&
            <div className=" w-10 h-10 rounded-full">
            <img className="w-10 h-10 rounded-full" src={user.photoURL}></img>
            </div>
        }
          </div>
      </div>
  </>
    );
};

export default Navbar;