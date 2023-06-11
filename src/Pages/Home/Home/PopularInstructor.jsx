import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allinstructor/instructor')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data.slice(0, 6));
            });
    }, []);

    return (
        <div className='my-5'>
            <motion.div
                className="box"
                whileHover={{ scale: [null, 0.9, 1.4] }}
                transition={{ duration: 0.3 }}>
                <h2 className='text-center font-semibold uppercase text-5xl my-8'>See Our Instructors</h2>

            </motion.div>
            <div className='grid md:grid-cols-3 gap-4 mx-auto my-5'>
                {instructors.map(instructor => (
                    <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: {instructor.name}</h2>
                            <p>Email: {instructor.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-1/4 mx-auto'>
                <Link to='/instructors' className='btn btn-info w-50 flex justify-center'>see All instructors</Link>
            </div>
        </div>
    );
};

export default PopularInstructor;