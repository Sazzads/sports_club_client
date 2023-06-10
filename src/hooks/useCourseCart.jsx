import React from 'react';
import useAuth from './useAuth';
import { useQuery } from 'react-query';
// import { useQuery,loading } from 'react-query';

const useCourseCart = () => {
    const { user,loading } = useAuth()

    const { isLoading, data: cart = [], error, isError, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json()
        }
    })
    return [cart, refetch, isLoading]
};

export default useCourseCart;