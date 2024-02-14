import React from 'react'
import PmSidebar from './PmSidebar'

export default function PmDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="position-fixed top-0 start-0">
          <PmSidebar/>
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
