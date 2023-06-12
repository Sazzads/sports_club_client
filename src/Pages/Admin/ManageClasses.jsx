import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

const ManageClasses = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [Id, setId] = useState(null)
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })

    // console.log(classes);


    //handle approve
    const handleApprove = (classes) => {
        // console.log(classes._id);
        fetch(`https://server-site-sazzads.vercel.app/allclass/${classes._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${classes.name} THE CLASS IS APPROVED`)
                }
            })

        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, classes._id]);
    }
    //handle deny
    const handleDeny = (classes) => {
        fetch(`https://server-site-sazzads.vercel.app/allclasss/${classes._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${classes.name} THE CLASS IS DENIED`)
                }
            })

        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, classes._id]);
    }

    const isButtonDisabled = (userId) => {
        return disabledButtons.includes(userId);
    };

    const handleFeedback = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        const newFeadback = { feedback }
        console.log(newFeadback);
        const id = event.target.id.value;
        console.log(id);


        fetch(`https://server-site-sazzads.vercel.app/allclass/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newFeadback)
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.success('FEEDBACK UPDATED SUCCESSFULLy')
            })


    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">send Feedback</h3>
                    <form onSubmit={handleFeedback}>
                        <input className='hidden' name="id" value={Id || ''} readOnly type="text" />
                        <input className='border p-4' placeholder='send feedback' type="text" name="feedback" id="" />
                        <br />
                        <input className='btn mt-3' type="submit" value="submit" />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>


            <h2 className='text-3xl text-center my-4'>manage All Classes</h2>
            <h2>Total classes: {classes.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>###</th>
                            <th>image</th>
                            <th>name</th>
                            <th>Instructor Name</th>
                            <th>Instructor email</th>
                            <th>Available seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    {
                        classes.map((classs, index) => <tbody key={classs._id}>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classs?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{classs?.className}</td>
                                <td>{classs?.name}</td>
                                <td>{classs?.email}</td>
                                <td>{classs?.seat}</td>
                                <td>{classs?.price}</td>
                                <td>{classs?.status}</td>
                                <th className=''>
                                    <button onClick={() => handleApprove(classs)} disabled={isButtonDisabled(classs._id)} className='btn btn-xs bg-red-400'>{classs.status == 'approved' ? 'approved' : 'click'}</button>
                                </th>       
                                <th className=''>


                                    <button onClick={() => handleDeny(classs)} disabled={isButtonDisabled(classs._id)} className='btn btn-xs bg-red-400'>{classs.status == 'deny' ? 'deny' : 'click'}</button>
                                </th>

                                <th className=''>  
                                    <label onClick={() => setId(classs._id)} htmlFor="my_modal_6" className="btn btn-xs">Feedback</label>
                                </th>

                            </tr>
                        </tbody>)
                    }

                </table>
            </div>



        </div>
    );
};

export default ManageClasses;