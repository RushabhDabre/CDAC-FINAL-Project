import React from 'react';
import './dashboard.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';


export default function AdminDashboard() {
  return (
    <main >
      <div className='main-title'>
            <h3 className='text-dark'>DASHBOARD</h3>
        </div>
      <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3 className='fs-6'>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon fs-6'/>
            </div>
            <h1 className='fs-6'>300</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3 className='fs-6'>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className='card_icon fs-6'/>
            </div>
            <h1 className='fs-6'>12</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3 className='fs-6'>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon fs-6'/>
            </div>
            <h1 className='fs-6'>33</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3 className='fs-6'>ALERTS</h3>
                <BsFillBellFill className='card_icon fs-6'/>
            </div>
            <h1 className='fs-6'>42</h1>
        </div>
      </div>
    </main>
    
  );
}

