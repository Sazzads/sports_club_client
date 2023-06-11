import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';

const DashBoard = () => {

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <h2 className='text-5xl my-4'>DashBoard</h2>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {
                            isAdmin && <>

                                <li><Link to='manage-users'>Manage Users</Link></li>
                                <li><Link to='manage-classes'>Manage Classes</Link></li>
                            </>
                        }
                        {isInstructor && <>
                            <li><Link to='addclasses'>Add a Class</Link></li>
                            <li><Link to='myclasses'>My Classes</Link></li>
                        </>}
                        {isStudent && <>
                            <li><Link to='my-selected-classes'>My Selected Classes</Link></li>
                            <li><Link to='my-enrolled-classes'>My Enrolled CLasses</Link></li>
                            {/* <li><Link to='payments'>Payment</Link></li> */}


                        </>}


                        <li className='divider'></li>
                        <li><Link to='/'>Home</Link></li>





                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;