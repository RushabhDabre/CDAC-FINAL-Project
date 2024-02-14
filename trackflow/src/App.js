import './App.css';
import { React } from 'react';
import {Route, Routes} from 'react-router-dom';
import AddEmployee from './Components/Admin/AddEmployee';
import Login from './Components/Login'
import AdminDashboard from './Components/Admin/AdminDashboard';
import PmDashboard from './Components/Project Manager/PmDashboard';
import EmpDashboard from './Components/Employee/EmpDashboard';
import EmployeeTable from './Components/Admin/EmployeeTable';
import ErrorPage from './Components/ErrorPage';
import UpdateEmployee from './Components/Admin/UpdateEmployee';

function App() {
  return (
    <div className='App-header'>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/admin_dashboard" element={<AdminDashboard/>}>
          <Route path="userinfo" element={<EmployeeTable/>}/> 
          <Route path="addemp" element={<AddEmployee/>}/> 
          <Route path="updateemp/:empId" element={<UpdateEmployee/>}/>
        </Route>
        <Route path="/pm_dashboard" element={<PmDashboard/>}/>
        <Route path="/emp_dashboard" element={<EmpDashboard/>}/> 
        <Route path="/errorPage" element={<ErrorPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
