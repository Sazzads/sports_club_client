import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCourseCart from "../../../hooks/useCourseCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const AllClasses = () => {
    const [datas, setDatas] = useState([])
    const { user } = useAuth()
    const navigate = useNavigate()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    // const [course, setCourse] = useState(null)

    // useEffect(() => {
    //     const getCourse = async () => {
    //         const res = await fetch("https://server-site-sazzads.vercel.app/allclasses")
    //         const data = await res.json()
    //         setCourse(data)
    //     }
    //     getCourse();
    // }, [])


    const handleAddTocart = data => {
        const courseItem = { courseId: data._id, className: data.className, email: data.email, image: data.image, name: data.name, price: data.price, seat: data.seat }
        console.log(courseItem);


        if (user && user.email) {
            const courseItemCart = { courseId: data._id, className: data.className, email: user.email, image: data.image, name: data.name, price: data.price, seat: data.seat }
            fetch('https://server-site-sazzads.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseItemCart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        toast.success('Your Course is Added on Dashboard, Please Enroll')
                    }
                })
        }
        else {
            toast.error('Please Login as a student')
            navigate('/login')
        }
    }


    useEffect(() => {
        fetch('https://server-site-sazzads.vercel.app/approvedclass/approved')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDatas(data)
            })
    }, [])

    return (
        <div className="my-10">
            <div className="my-5">
                <h3 className="text-5xl uppercase text-center mb-3 font-semibold">All Classes</h3>
                <h3 className="text-xl uppercase text-center">Total Class: {datas.length}</h3>
            </div>
            <div className='grid md:grid-cols-3  grid-cols-1 gap-4'>
                {
                    datas.map(data =>
                        <div key={data._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="Shoes" /></figure>
                            {/* <div className="card-body"> */}
                            <div className={`card-body ${data.seat - data.EnrolledSeat === 0 ? 'bg-red-600' : ''}`}>
                                <h2 className="card-title">Class Name: {data.className}</h2>
                                <p>Instructor Name: {data.name}</p>
                                <p>Total Seats: {data.seat}</p>
                                <p>Available Seats: {data.seat && data.EnrolledSeat ? data.seat - data.EnrolledSeat : "N/A"}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleAddTocart(data)} disabled={isAdmin || isInstructor || data.seat - data.EnrolledSeat == 0} className="btn btn-primary">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllClasses;