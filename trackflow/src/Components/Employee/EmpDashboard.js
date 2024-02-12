import React from 'react'
import SideBar from '../Sidebar/SideBar'

export default function EmpDashboard({username}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="position-fixed top-0 start-0">
          <SideBar username={username} />
        </div>
        <div className="col-md-8 offset-md-3 d-flex justify-content-center align-items-center">
          <div className="content">
            {/* <AddEmployee /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
