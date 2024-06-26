import { Link, NavLink } from 'react-router-dom'
import userLogo from '../../assets/logo/user_1.png';
import useAuth from '../../hooks/useAuth';

export default function Navber() {
    const { user, setUser, loading, setLoading, createUserEmailPass, signInEmailPass, googleSignIn, logOut } = useAuth();
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active text-info" : ""
                                }
                            >
                                All Tasks
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Coders <span className='text-info'>Tasks</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " text-info" : ""
                                }
                            >
                                All Tasks
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={userLogo} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                {
                                    user?.displayName && <li><a>{user?.displayName}</a></li>
                                }
                                <li><Link to={"/login"}>Login</Link></li>
                                <li><Link to={"/reg"}>Registration</Link></li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
