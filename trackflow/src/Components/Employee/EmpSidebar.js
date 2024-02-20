import React,{useEffect } from 'react'
import './Sidebar.css';
import {BsGrid1X2Fill, BsFillGrid3X3GapFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { RiShutDownLine } from "react-icons/ri";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import { confirmAlert } from '../../../node_modules/react-confirm-alert/lib/index.js';
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';

export default function EmpSidebar() {
    let navigate = useNavigate();
    
    useEffect(()=>{
        const loginId = JSON.parse(localStorage.getItem("loggedUser")).id;
        fetch(`http://localhost:8080/getEmployee?loginid=${loginId}`)
        .then(resp=>resp.json())
        .then(empinfo => {
          localStorage.setItem("empinfo",JSON.stringify(empinfo));
        })
    });

    const HandleLogOut=()=>{
        localStorage.clear();
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
            <div className="col-md-6 position-fixed sticky-top " style={{  top: "40px", bottom: "0", backgroundColor: "#f7f8f9", width: "200px"  }}>
                <ul className="list-unstyled m-0">
                    <li className='sidebar px-4 py-3 fs-6'>
                        <Link className='text-decoration-none text-secondary fs-6' to={'EmpHome'}>
                            <BsGrid1X2Fill className='icon fs-6'/> Dashboard
                        </Link>
                    </li>
                    
                    <li className='sidebar px-4 py-3 fs-5'>
                        <Link className='text-decoration-none text-secondary fs-6' to={'ViewTasks'}>
                            <BsFillGrid3X3GapFill className='icon fs-6'/> View Task
                        </Link>
                    </li>
                    <li className='sidebar px-4 py-3 fs-5'>
                        <Link className='text-decoration-none text-secondary fs-6' to={'UpdatePersInfo'}>
                            <BsMenuButtonWideFill className='icon fs-6'/> Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='col-md-9 offset-md-2 position-absolute' style={{top: "40px"}}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
