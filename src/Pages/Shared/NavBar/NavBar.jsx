import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    const navbarOptions = <>
        <li><a>Home</a></li>
        <li><a>Instructors</a> </li>
        <li><a>Classes</a></li>
        {user && <li><a>DashBoard</a></li>}
    </>
    return (
        <>
            <div className="navbar bg-base-300  max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Sports Club</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <NavLink onClick={handleLogOut} className="btn  me-1">LogOut</NavLink> :
                        <NavLink to='/login' className="btn me-1">Login</NavLink>
                    }
                    {user &&
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left " data-tip={user?.displayName}>
                            <div className="w-10 rounded-full ">
                                <img className='w-full' src={user?.photoURL} />
                            </div>
                        </label>
                    }

                </div>
            </div>
        </>
    );
};

export default NavBar;