import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const [disabledButtons, setDisabledButtons] = useState([]);

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleAdminMake = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${user.name} ADMIN MAKES SUCCESSFUL`)
                }
            })
        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);
    }

    const handleInstructorMake = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${user.name} INSTRUCTOR MAKES SUCCESSFUL`)
                }
            })
        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);

    }
    const isButtonDisabled = (userId) => {
        return disabledButtons.includes(userId);
    };




    return (
        <div className='w-full'>
            <h2 className='text-5xl'>manage All users</h2>
            <h3>Total Users:{users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {/* Admin */}
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    {/* <td><button onClick={() => handleAdminMake(user)}  className='btn btn-xs bg-red-400'>{user.role == 'admin' ? 'admin' : 'users'}</button></td>
                                    <td><button onClick={() => handleInstructorMake(user)} className='btn btn-xs  bg-red-400'>{user.role == 'instructor' ? 'instructor' : 'users'}</button></td> */}

                                    <td><button onClick={() => handleAdminMake(user)} disabled={isButtonDisabled(user._id)} className='btn btn-xs bg-red-400'>{user.role == 'admin' ? 'admin' : 'click'}</button></td>
                                    <td><button onClick={() => handleInstructorMake(user)} disabled={isButtonDisabled(user._id)} className='btn btn-xs  bg-red-400'>{user.role == 'instructor' ? 'instructor' : 'click'}</button></td>


                                </tr>)
                        }
                        {/* disabled={isButtonDisabled(user._id)} disabled={isButtonDisabled(user._id)}  */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;