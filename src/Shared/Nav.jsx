import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire(
                            'Sign Out!',
                            'Your Account Logout successfully.',
                            'success'
                        )
                    })
              .catch(err => console.log(err))
            }
        })
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/colleges">Colleges</NavLink></li>
        <li><NavLink to="/admission">Admission</NavLink></li>
        <li><NavLink to="/myCollege">My College</NavLink></li>
        {user ? <li><button onClick={handleLogOut}>Log Out</button></li> : <Link to="/login"><button className="mt-2">Login</button></Link>}
    </>

    return (
        <div className="navbar bg-base-100 my-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">College Compass</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <Link to="/displayUser"><img className="w-14 h-14 rounded-full" src={user?.photoURL} title={user?.displayName} alt="user photo" /></Link>}
            </div>
        </div>
    );
};

export default Nav;