
import useCourseCart from '../../hooks/useCourseCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
    const [cart, refetch] = useCourseCart()



    // const total = cart.reduce((sum, coursePrice) => coursePrice.price + sum, 0)
    // console.log(cart);
    const handleDelete = (course) => {

        Swal.fire({
            title: 'Are you sure want to delete from Cart?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-site-sazzads.vercel.app/carts/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Cart Course Has Been Deleted',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    // const handlePay=(course=>{

    // })

    return (
        <div className=''>
            <div className='my-5'>
                <h2 className='uppercase text-3xl text-center'>my Selected classes</h2>
                <h4 className='text-center text-xl my-3'>Total Carts: {cart?.length || 0}</h4>
                <div className='flex justify-between my-4'>
                    {/* <h2>total price:{total}</h2> */}
                    {/* <Link to='/payments' className='btn btn-sm btn-info'>Payment</Link> */}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Action</th>
                            <th>Payment</th>
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
                                    <th><button onClick={() => handleDelete(course)} className='btn btn-sm btn-error'>Delete</button></th>
                                    <th><Link to={`/payments/${course._id}`} className='btn btn-sm btn-error'>Pay</Link></th>
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