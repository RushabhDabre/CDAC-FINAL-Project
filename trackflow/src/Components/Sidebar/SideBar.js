import React, { useRef } from 'react';
import 'bootstrap/js/dist/dropdown';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css'; // Import css
import LoadingBar from 'react-top-loading-bar';
import {  useNavigate } from "react-router-dom";

export default function  SideBar({username}) {   
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate(); 
    const HandleLogOut=()=>{
        ref.current.complete();
        setTimeout(() => navigate("/"), 500);
        localStorage.removeItem('accessToken');
    };
    const confirmation = () => {
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
        // if (window.confirm('Are you sure you wish to delete this item?')) handleClearClick()
    };

  return (
    <div className='container-fluid '>
        <LoadingBar color="#f11946" ref={ref} shadow={true} />
        <div className='row '>
            <div className=' col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column shadow'>
                <div className="mt-3">
                    <a className='text-decoration-none text-dark d-none d-sm-inline d-flex align-items-center ms-3 mt-5'>
                        <span className='ms-4 fs-4 d-none d-sm-inline'><b>TrackFlow</b></span>
                    </a>
                    <hr className='text-secondary d-none d-sm-block'/>
                    <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                        <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                            <Link  className="nav-link text-dark fs-5" to="/userinfo">
                                <i className='bi bi-person-add'>
                                    <span className='ms-3 d-none d-sm-inline'>User Details</span>
                                </i>
                            </Link>
                        </li>
                        <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                        <Link  className="nav-link text-dark fs-5" to="/home">
                                <i className='bi bi-table'>
                                    <span className='ms-3 d-none d-sm-inline'>Admin</span>
                                </i>
                            </Link>
                        </li>
                        <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0">
                        <Link  className="nav-link text-dark fs-5" to="/home">
                                <i className='bi bi-house'>
                                    <span className='ms-3 d-none d-sm-inline'>User</span>
                                </i>
                            </Link>
                        </li>
                    </ul>  
                </div>  
                <div className="dropdown open">
                    <a className="text-decoration-none text-dark dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='bi bi-person-circle'></i>
                        <span className='ms-2 d-none d-sm-inline'>{username}</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                        <Link to="/profile"  className="dropdown-item" >Edit profile</Link>
                        <a className="dropdown-item " onClick={confirmation}>Logout</a>
                    </div>
                </div>
                 
            </div>
        </div>
    </div>
  )
}
