import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";



const Dashboard = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-12 my-8">
                <div className="flex flex-col col-span-3 bg-slate-400 min-h-screen space-y-4 p-2 font-semibold">
                    <NavLink to='/dashboard' className="bg-gray-300 p-2">Home</NavLink>
                    <NavLink to='/dashboard/addProduct' className="bg-gray-300 p-2">Add Product</NavLink>
                    <NavLink to='/dashboard/addCategory' className="bg-gray-300 p-2">Add Category</NavLink>
                    <NavLink to='/dashboard/manageProduct' className="bg-gray-300 p-2">Mange Product</NavLink>
                    <NavLink to='/dashboard/manageCategory' className="bg-gray-300 p-2">Manage Category</NavLink>
                                 
                </div>
                <div className="col-span-9 min-h-screen ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;