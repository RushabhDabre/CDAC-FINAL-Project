import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function EmpSidebar() {
  return (
    <div className='bg-dark'>
        <div className='d-flex px-3 pt-3 mb-3'>
            <div className='mt-3 fs-5 fw-bold text-secondary'>TrackFlow</div>
        </div>

        <ul className="list-unstyled m-0">
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary'>
                    <BsFillGrid3X3GapFill className='icon'/> Employees
                </Link>
            </li>
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary'>
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary'>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar px-4 py-4 fs-5'>
                <Link className='text-decoration-none text-secondary'>
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>
    </div>
  )
}
