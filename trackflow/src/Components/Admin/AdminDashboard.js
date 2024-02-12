import React from 'react'
// import AddEmployee from './AddEmployee'
import SideBar from '../Sidebar/SideBar'
import TaskList from '../Task/TaskList';

export default function AdminDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="position-fixed top-0 start-0">
          <SideBar  />
        </div>
        <div className="col-md-8 offset-md-3 d-flex justify-content-center align-items-center">
          <div className="content">
      
          </div>
        </div>
      </div>
    </div>

    
  );
}

