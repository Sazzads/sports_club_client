import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PopularClass = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('https://server-site-sazzads.vercel.app/approvedclass/approved')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
      });
  }, []);

  // Sort 
  const sortedData = [...datas].sort((a, b) => b.EnrolledSeat - a.EnrolledSeat);
  
  // Show  first 6 data items
  const firstSixData = sortedData.slice(0, 6);

  return (
    <div className="my-5">
      <motion.div
        className="box"
        whileHover={{ scale: [null, 0.9, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-center font-semibold uppercase text-5xl my-8">popular Classes</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-4 mx-auto my-5">
        {firstSixData.map((course) => (
          <div key={course._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={course?.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {course.className}</h2>
              <p>Email: {course.email}</p>
              <p>Total seats: {course.seat}</p>
              <p>Enrolled Seats: {course?.EnrolledSeat}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 mx-auto">
        <Link to="/classes" className="btn btn-info w-50 flex justify-center">
          see All Class
        </Link>
      </div>
    </div>
  );
};

export default PopularClass;
