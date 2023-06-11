import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyEnorlledClasses = () => {

    const { user } = useAuth()
    const [data, setData] = useState([])
    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/pays/?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                })
        }
    }, [user])


    return (
        <div className='mx-5 mx-auto'>
            <h2>My Enrolled classes</h2>
            <div className='grid md:grid-cols-2  grid-cols-1 gap-4'>
                {
                    data.map(course => 
                    <div key={course._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={course.image} alt="img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.className}</h2>
                            <p>Your Email:{course.email}</p>
                            <p>Your Trx ID: {course.trxID}</p>
                            <p>Enrolled Time: {course.date}</p>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyEnorlledClasses;