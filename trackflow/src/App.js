import { React } from 'react';
import {Route, Routes} from 'react-router-dom';
import CreateProject from './Components/Project/CreateProject';
import AddEmployee from './Components/Admin/AddEmployee';
import CreateTask from './Components/Task/CreateTask';
import './App.css';
import Login from './Components/Login'
import AdminDashboard from './Components/Admin/AdminDashboard';
import PmDashboard from './Components/Project Manager/PmDashboard';
import EmpDashboard from './Components/Employee/EmpDashboard';
import SideBar from './Components/Sidebar/SideBar';
// import TaskDashboard from './Components/TaskDashboard';

function App() {
  return (
    <div className='App-header'>  
        {/* <TaskDashboard/> */}
        {/* <SideBar/> */}
        {/* <AddEmployee/> */}
      <Routes>
         <Route path="/" element={<Login/>}/> 
        <Route path="/admin_dashboard" element={<AdminDashboard/>}/>
        <Route path="/pm_dashboard" element={<PmDashboard/>}/>
        <Route path="/emp_dashboard" element={<EmpDashboard/>}/> 
        <Route path="/addemp" element={<AddEmployee/>}/> 

      </Routes>
    </div>
  );
}

export default App;
