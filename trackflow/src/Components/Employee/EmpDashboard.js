import React from 'react'
import Sidebar from '../Admin/AdminSidebar'

export default function EmpDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="position-fixed top-0 start-0">
          <Sidebar/>
        </div>
        <div className="col-md-8 offset-md-3 d-flex justify-content-center align-items-center">
          <div className="content">
            {/* component */}
          </div>
        </div>
      </div>
    </div>
  )
}
