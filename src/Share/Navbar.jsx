import { Button } from 'react-daisyui';
import logo from '../assets/download.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

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
      <li><Link to='/offer'>Offer</Link></li> 
      <li><Link to='/blog'>Blog</Link></li> 
     {
        user && 
        <li><Link to='/dashboard/userhome'>DashBoard</Link></li>
     }
     
      {
            user ? <>
                <span>{user?.displayName}</span>
                <button  onClick={handleLogOut} className="btn bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">Log out</button>
            </> : <>
                <li>
                    {/* <Link to="/login"><Button className='btn bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800'>Log In</Button></Link> */}
                    
                    
                      <Link to="/login">
              <button className="px-4 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 hover:brightness-110 transition">
                Log In
              </button>             </Link>
                    </li>

            </>
        }
    </>
  return(
      <>
      <div className="max-w-screen-xl z-10 shadow-md text-white bg-purple-950">
             <div className="hidden  md:flex justify-between items-center px-6 py-2 border-b border-white/10 text-sm">
        <div className="flex gap-6 items-center">
              <p className="flex items-center gap-2"><FaEnvelope /> support@makeupschool.com</p>     
               <p className="flex items-center gap-2"><FaPhoneAlt /> +880 1234-567890</p>      
               </div>
           
                 <div className="flex items-center gap-4">
          <a href="#"><FaFacebookF className="hover:text-purple-300" /></a>
          <a href="#"><FaInstagram className="hover:text-purple-300" /></a>
        <a href="#"><FaLinkedinIn className="hover:text-purple-300" /></a>
       </div>
     </div>
      </div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl shadow-md bg-black text-white">
     
   
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-dark rounded-box w-52">
                      {navOption}
                  </ul>
              </div>
              {/* <img className='rounded-full' style={{height:"4rem"}} src={logo} alt="" />
              <a className="btn btn-ghost normal-case text-xl">MAKEUP SCHOLLING</a> */}
         
             <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-bold text-purple-300">MAKEUP SCHOOLING</span>
          </Link>
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
// import { Button } from 'react-daisyui';
// import logo from '../assets/download.jpg';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPhoneAlt
// } from 'react-icons/fa';

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut().catch(error => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/instructor">Instructor</Link></li>
//       <li><Link to="/allclass">Classes</Link></li>
//       <li><Link to="/popular">Popular</Link></li>
//       <li><Link to="/offer">Offer</Link></li>
//       <li><Link to="/blog">Blog</Link></li>
//       {user && <li><Link to="/dashboard">Dashboard</Link></li>}
//     </>
//   );

//   return (
//     <div className="w-full fixed z-50 shadow-md text-white">
//       {/* 🔝 Top Contact Bar */}
//       <div className="bg-purple-900 text-sm hidden md:flex justify-between items-center px-8 py-2">
//         <div className="flex items-center gap-6">
//           <span className="flex items-center gap-2"><FaEnvelope /> support@makeupschool.com</span>
//           <span className="flex items-center gap-2"><FaPhoneAlt /> +880 1234-567890</span>
//         </div>
//         <div className="flex items-center gap-4 text-white">
//           <a href="#"><FaFacebookF className="hover:text-purple-300 transition" /></a>
//           <a href="#"><FaInstagram className="hover:text-purple-300 transition" /></a>
//           <a href="#"><FaLinkedinIn className="hover:text-purple-300 transition" /></a>
//         </div>
//       </div>

//       {/* 🌐 Main Navbar */}
//       <div className="navbar px-4 md:px-10 bg-black bg-opacity-90 backdrop-blur-md">
//         {/* 🍔 Mobile Dropdown */}
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//                 viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-purple-950 rounded-box w-52">
//               {navOptions}
//               {!user && (
//                 <li>
//                   <Link to="/login">
//                     <button className="w-full bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 px-4 py-2 rounded-full text-white font-semibold hover:brightness-110 transition">
//                       Log In
//                     </button>
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* 🖼️ Logo & Title */}
//           <Link to="/" className="flex items-center gap-2 ml-2 md:ml-0">
//             <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
//             <span className="text-xl font-bold text-purple-300">MAKEUP SCHOOLING</span>
//           </Link>
//         </div>

//         {/* 🧭 Center Nav Links */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 gap-2">
//             {navOptions}
//           </ul>
//         </div>

//         {/* 👤 Right Side - Auth + Avatar */}
//         <div className="navbar-end flex items-center gap-4">
//           {user ? (
//             <>
//               <span className="hidden md:block font-medium text-purple-200">{user.displayName}</span>
//               {user.photoURL && (
//                 <img
//                   src={user.photoURL}
//                   className="w-10 h-10 rounded-full object-cover border-2 border-purple-400"
//                   alt="User"
//                 />
//               )}
//               <button
//                 onClick={handleLogOut}
//                 className="px-4 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 hover:brightness-110 transition"
//               >
//                 Log Out
//               </button>
//             </>
//           ) : (
//             <Link to="/login">
//               <button className="px-4 py-1 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 hover:brightness-110 transition">
//                 Log In
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



