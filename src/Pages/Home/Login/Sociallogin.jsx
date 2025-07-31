// import React, { useContext } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaGoogle } from 'react-icons/fa';


// const Sociallogin = () => {
//     const { googleSignIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     const GoogleSignIn = () => {
//         googleSignIn()
//             .then(result => {
//                 const loggedInUser = result.user;
//                 console.log(loggedInUser);
//                 const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
//                 fetch('https://summer-camp-server-suraiyatithi.vercel.app/users', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(saveUser)
//                 })
//                     .then(res => res.json())
//                     .then(() => {
//                         navigate(from, { replace: true });
//                     })
//             })
//     }
//     return (
//         <div>
    
//         <div className="w-full text-center">
//             <button onClick={GoogleSignIn} className="btn bg-orange-600 text-white px-12 w-5/6 lowercase">
//                 with google <FaGoogle></FaGoogle>
//             </button>
//         </div>
//     </div>
//     );
// };

// export default Sociallogin;



import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Sociallogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };

        fetch('https://summer-camp-server-suraiyatithi.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch(error => {
        console.error('Google sign-in error:', error);
      });
  };

  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600 mb-2">Or continue with</p>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center gap-2 w-5/6 mx-auto px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 hover:brightness-110 transition"
      >
        <FaGoogle className="text-xl" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Sociallogin;
