import { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AxiosSecure = () => {
    const {logOut}=useContext(AuthContext);
    const navigate=useNavigate()
    const axiossecure=axios.create({
        baseURL:'http://localhost:5000',
    })
    useEffect(()=>{
        axiossecure.interceptors.request.use((config)=>{
const token=localStorage.getItem('access-token')
if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;

        })
    
    axiossecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOut();
            navigate('/login');
          }
          return Promise.reject(error);
        }
      );
    }, [logOut, navigate, axiossecure]);
    return [axiossecure];
};


export default AxiosSecure;