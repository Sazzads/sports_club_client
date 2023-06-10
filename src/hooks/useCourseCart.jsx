import React from 'react';
import useAuth from './useAuth';

const useCourseCart = () => {
    const { user } = useAuth()
};

export default useCourseCart;