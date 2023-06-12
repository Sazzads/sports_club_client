import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const PaymentHistory = () => {
    const { user } = useAuth()
    const [data, setData] = useState([])
    useEffect(() => {
        if (user && user.email) {
            fetch(`https://server-site-sazzads.vercel.app/pays/?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                })
        }
    }, [user])
    return (
        <div className='my-10'>
            <div className="text-center my-5">
                <h2 className='text-3xl'>History of transaction ID</h2>
                <h3> Total transaction: {data.length}</h3>
            </div>


            <div className='grid grid-cols-1 gap-4'>
                {data.map(history =>
                    <div className='card w-1/2 mx-auto border py-2 px-5 bg-slate-200' key={history._id}>

                        <p>Course Name: {history.className}</p>
                        <p>Payment Time: {history.date}</p>
                        <p>transaction ID: {history.trxID}</p>

                    </div>)}
            </div>
        </div>
    );
};

export default PaymentHistory;