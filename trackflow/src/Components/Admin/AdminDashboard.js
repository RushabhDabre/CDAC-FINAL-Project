import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar'

export default function AdminDashboard() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-sm-auto d-flex sticky-top p-0" style={{"height":"100vh"}}>
          <AdminSidebar />
        </div>
        <div className="col-sm-auto d-flex justify-content-center align-items-center">
              <Outlet/>
        </div>
      </div>
    </div>

    
  );
}

