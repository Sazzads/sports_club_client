import React from 'react';
import useAuth from './useAuth';
import { useQuery } from 'react-query';

const useCourseCart = () => {
    const { user,loading } = useAuth()

    const {  data: cart = [],refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json()
        }
    })
    return [cart, refetch]
};

export default useCourseCart;