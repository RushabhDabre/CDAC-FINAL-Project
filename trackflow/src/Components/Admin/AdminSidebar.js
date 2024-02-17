import React from 'react'
import './Sidebar.css';
import {BsGrid1X2Fill, BsFillGrid3X3GapFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { RiShutDownLine } from "react-icons/ri";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import { confirmAlert } from '../../../node_modules/react-confirm-alert/lib/index.js';
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';

export default function AdminSidebar() {
    let navigate = useNavigate();
    
    const HandleLogOut=()=>{
        localStorage.removeItem('accessToken');
        setTimeout(() => navigate("/"), 500);
    };

    const confirmation = () =>{
        confirmAlert({
            title: 'Confirm to logout',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {HandleLogOut()}
                },
                {
                    label: 'No',
                }
            ]
        });
    }

  return (
    <div className="container-fluid p-0">
        <nav className="navbar fixed-top" style={{backgroundColor:"#323452", height: "40px" }}>
            <div className="container-fluid">
                <a className="text-decoration-none text-white fs-6">TRACKFLOW</a>
                <a className="text-decoration-none text-white fs-6" onClick={confirmation}>
                    <RiShutDownLine/>
                </a>
            </div>
        </nav>
        <div className="row">
            <div className="col-sm-auto position-fixed sticky-top p-0" style={{  top: "40px", bottom: "0", backgroundColor: "#f7f8f9", zIndex: "1020", overflowY: "auto", width: "200px"  }}>
                <ul className="list-unstyled m-0">
                    <li className='sidebar px-4 py-3 fs-6'>
                        <Link className='text-decoration-none text-secondary fs-6' to={'adminHome'}>
                            <BsGrid1X2Fill className='icon fs-6'/> Dashboard
                        </Link>
                    </li>
                    
                    <li className='sidebar px-4 py-3 fs-5'>
                        <Link className='text-decoration-none text-secondary fs-6' to={'userinfo'}>
                            <BsFillGrid3X3GapFill className='icon fs-6'/> Employees
                        </Link>
                    </li>
                    <li className='sidebar px-4 py-3 fs-5'>
                        <Link className='text-decoration-none text-secondary fs-6' to={'CreateProject'}>
                            <BsMenuButtonWideFill className='icon fs-6'/> Projects
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center" style={{ overflowY: "auto", paddingLeft: "200px" }}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
