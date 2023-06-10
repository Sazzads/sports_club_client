import React from 'react';
import useCourseCart from '../../hooks/useCourseCart';

const MySelectedClasses = () => {
    const [cart, refetch] = useCourseCart()
    // console.log(cart);
    return (
        <div className=''>
            <div className='my-5'>
                <h2 className='uppercase text-3xl text-center'>my Selected classes</h2>
                <h4 className='text-center text-xl my-3'>Total Carts: {cart?.length || 0}</h4>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th><button>Action</button></th>
                            <th><button>Payment</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((course, index) =>
                                <tr key={course._id}>
                                    <th>{index + 1}</th>
                                    <th>{course.className}</th>
                                    <th>{course.name}</th>
                                    <th>{course.price}</th>
                                    <th>{course.seat}</th>
                                    <th><button className='btn btn-sm btn-error'>Delete</button></th>
                                    <th><button className='btn btn-sm btn-info'>Payment</button></th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;