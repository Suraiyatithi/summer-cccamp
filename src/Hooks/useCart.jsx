import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import AxiosSecure from "./AxiosSecure";
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user,loading}=useContext(AuthContext);
    const [axiossecure]=AxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
     
        queryFn: async () => {
            const res = await axiossecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart,refetch]
};

export default useCart;