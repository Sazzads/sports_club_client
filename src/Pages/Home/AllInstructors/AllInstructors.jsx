import React, { useEffect, useState } from 'react';

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allinstructor/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center font-semibold uppercase text-5xl my-8'>See Our Instructors</h2>

            <div className='grid grid-cols-3 gap-4'>
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: {instructor.name}</h2>
                            <p>Email: {instructor.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllInstructors;