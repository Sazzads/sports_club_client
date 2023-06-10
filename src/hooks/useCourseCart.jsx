import React from 'react';
import useAuth from './useAuth';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const useCourseCart = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCourseCart;