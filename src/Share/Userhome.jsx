import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-rose-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-3xl max-w-3xl w-full p-8 text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/YRzd6bt/user.png"}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md border-4 border-rose-300"
        />
        <h1 className="text-3xl font-bold text-rose-600 mb-2">
          Welcome, {user?.displayName || 'Glam Babe'}! 💄
        </h1>
        <p className="text-gray-600 mb-6">
          Email: {user?.email}
        </p>

        <div className="flex justify-center space-x-6 mt-6 text-rose-600 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-600 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="hover:text-blue-500 transition" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="hover:text-rose-500 transition" />
          </a>
          <a href="tel:+1234567890">
            <FaPhoneAlt className="hover:text-green-500 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
