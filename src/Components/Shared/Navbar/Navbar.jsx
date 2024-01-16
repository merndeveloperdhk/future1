import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      {
        user || user?.email ? <li>
        <NavLink to="/bookings">Bookings</NavLink>
      </li>: ""
      }
      
      <li>
        <NavLink to="/blog">My cart</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div>
      {
        user || user?.email ? <p className="text-center bg-black py-1 text-white " >
        Welcome {user.displayName || user.email}. Now you can watch All the products.
      </p >: ""
      }
      <div className="navbar bg-base-100">
     
     <div className="navbar-start">
       <div className="dropdown">
         <label tabIndex={0} className="btn btn-ghost lg:hidden">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h8m-8 6h16"
             />
           </svg>
         </label>
         <ul
           tabIndex={0}
           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
         >
           {navItems}
         </ul>
       </div>
       <Link>
         <img src="https://i.ibb.co/51f0xrZ/Logo-03.png" alt="" />
       </Link>
     </div>
     <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal px-1">{navItems}</ul>
     </div>
     <div className="navbar-end ">
       <div className="flex gap-3 mr-3">
         {user || user?.email ?  (
           <div className="flex items-center">
           <span className="mr-2">{user?.email}</span>
           <span className="mr-2">{user?.displayName}</span>
          
           <div className="btn btn-outline btn-success" onClick={handleLogout}>Logout</div>
          
           </div>
         ) : (
           <div className="flex gap-3 mr-3">
             <NavLink to="/login">Login</NavLink>
             <NavLink to="/registration">Register</NavLink>
           </div>
         )}
       </div>
       <Link to='/addProducts' className="btn btn-info text-xs">Add Product</Link>
     </div>
   </div>
    </div>
    /*  <div className="flex justify-between items-center px-2 my-2">
            <Link to='/'><img src="https://i.ibb.co/51f0xrZ/Logo-03.png" alt="" /></Link>
            <nav className=" flex justify-center gap-3">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
            </nav>
            <div>
                <button className="px-3 py-1 bg-sky-500 rounded">Appointment</button>
            </div>
        </div> */
  );
};

export default Navbar;
