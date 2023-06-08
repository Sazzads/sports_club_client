import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    //tODO:load data from the server
    const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
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
                            isAdmin ? <>

                                <li><Link to='manage-users'>Manage Users</Link></li>
                                <li><Link to='manage-classes'>Manage Classes</Link></li>
                            </> : <>

                                <li className='divider'></li>
                                <li><Link to='/'>Home</Link></li>
                            </>
                        }


                        {/* <li><Link to='addclasses'>Add a Class</Link></li>
                        <li><Link to='myclasses'>My Classes</Link></li> */}


                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;