import { NavLink, Outlet } from "react-router-dom";
import {  FaWallet, FaHome, FaSchool, FaUserAlt, FaMoneyBillAlt, FaPlusSquare, FaUserGraduate, FaMapPin } from 'react-icons/fa';

import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import Footer from "../Share/Footer";

const Dashboard = () => {
   

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor]=useInstructor()

    return (
        <>
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-rose-200">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin &&
                          <>  <li><NavLink to="/"><FaHome></FaHome>HOME</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"> <FaSchool/> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageuser"><FaUserAlt/> Manage users</NavLink></li>
                          
                            
                        </> 
                    }
                    {
                        isInstructor &&
                        <>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/dashboard/myclass"><FaUserGraduate/> My Classes</NavLink></li>
                        <li><NavLink to="/dashboard/addclass"><FaPlusSquare/>Add a Class</NavLink></li>
                    </>
                    }
                    {
                       ! isAdmin && !isInstructor &&
                       
                        <>
                            <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/myselected"><FaMapPin/>My Selected Class</NavLink></li>
                            <li><NavLink to="/dashboard/myenroll"><FaWallet></FaWallet>my enrolled class</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/paymenthistory"><FaMoneyBillAlt/> Payment Histiory
                             
                                </NavLink>

                            </li>
                        </>
                    }




                  
                </ul>

            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Dashboard;