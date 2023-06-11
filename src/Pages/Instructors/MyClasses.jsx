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
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['allclasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/allclasses/${user?.email}`)
            return (res.data)
        }
    })



    console.log(classes);
    return (
        <div className='w-full'>
            <h2>My Classes</h2>
            {classes.length}



            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Seat</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            classes.map((classe, index) => <tr key={classe._id}>
                                <th>{index + 1}</th>
                                <td>{classe.className}</td>
                                <td>{classe.price}</td>
                                <td>{classe.seat}</td>
                                <td>{classe.status}</td>
                                <td>  {classe.status === "deny" ?
                                    <>{classe.feedback}</>
                                    : <></>}</td>
                                <th><button className='btn btn-info btn-sm'>UPDATE</button></th>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyClasses;