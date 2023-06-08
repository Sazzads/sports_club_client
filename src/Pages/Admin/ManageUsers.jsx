import React from 'react';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
            <h2>manage users</h2>
            {users.length}
        </div>
    );
};

export default ManageUsers;