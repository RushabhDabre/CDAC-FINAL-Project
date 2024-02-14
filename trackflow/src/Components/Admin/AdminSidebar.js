import React, {useRef} from 'react'
import {BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { IoLogOut } from "react-icons/io5";
import './Sidebar.css';
import { confirmAlert } from 'react-confirm-alert'; 
import LoadingBar from 'react-top-loading-bar';
import {  Link, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();
    
    const HandleLogOut=()=>{
        ref.current.complete();
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
    <div className='bg-dark'>
        <LoadingBar color="#f11946" ref={ref} shadow={true} />
        <div className='d-flex px-3 pt-3 mb-3'>
            <div className='mt-3 fs-5 fw-bold text-secondary'>TrackFlow</div>
        </div>

        <ul className="list-unstyled m-0">
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary' to={'/dashboard'}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary' to={'userinfo'}>
                    <BsFillGrid3X3GapFill className='icon'/> Employees
                </Link>
            </li>
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary'>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar px-4 py-4 fs-5'>
                <a className='text-decoration-none text-secondary' onClick={confirmation}>
                    <IoLogOut/> Logout
                </a>
            </li>
        </ul>
        {/* <div className='fixed-bottom'>
            <ul className="list-unstyled m-0">
                <li className='sidebar px-4 py-4 fs-5'>
                    <a className='text-decoration-none text-secondary' onClick={confirmation}>
                        <IoLogOut/> Logout
                    </a>
                </li>
            </ul>
        </div> */}
    </div>
  )
}
