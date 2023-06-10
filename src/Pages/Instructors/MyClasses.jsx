import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const MyClasses = () => {
    const { user } = useAuth();
    // const [classes, setClasses] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allclasses/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //         })
    // }, [user])

    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: classes=[] } = useQuery({
        queryKey: ['allclasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/allclasses/${user?.email}`)
            return(res.data)
        }
    })



    console.log(classes);
    return (
        <div className='w-full'>
            <h2>My Classes</h2>
            {classes.length}
        </div>
    );
};

export default MyClasses;