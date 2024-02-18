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
import AdminSidebar from './Components/Admin/AdminSidebar';
import CreateProject from './Components/Admin/CreateProject';
import PmSidebar from './Components/Project Manager/PmSidebar';
import ViewProject from './Components/Project Manager/ViewProject';
import CreateTask from './Components/Project Manager/CreateTask'
import TaskList from './Components/Employee/TaskList';
import EmpSidebar from './Components/Employee/EmpSidebar';
import GetAllProject from './Components/Admin/GetAllProject';
import AddTeam from './Components/Project Manager/AddTeam';
import ModalBtn from './Components/ModalBtn';

function App() {
  return (
    <div className='App-header'>
      <Routes>
        <Route path="/" element={<Login/>}/> 

        <Route path="/ADMIN" element={<AdminSidebar/>}>
          <Route path="adminHome" element={<AdminDashboard/>}/>
          <Route path="userinfo" element={<EmployeeTable/>}/> 
          <Route path="addemp" element={<AddEmployee/>}/> 
          <Route path="updateemp/:empId" element={<UpdateEmployee/>}/>
          <Route path="CreateProject" element={<CreateProject/>}/>
          <Route path="ShowProject" element={<GetAllProject/>}/>
        </Route>

        <Route path="/PM" element={<PmSidebar/>}>
          <Route path="PMHome" element={<PmDashboard/>}/>
          <Route path="PMProjects" element={<ViewProject/>}/> 
          <Route path="PMTasks" element={<CreateTask/>}/> 
          <Route path="addTeam" element={<AddTeam/>}/> 
        </Route>

        <Route path="/EMP" element={<EmpSidebar/>}>
          <Route path="EmpHome" element={<EmpDashboard/>}/>
          <Route path="ViewTasks" element={<ModalBtn/>}/> 
          {/* <Route path="ViewTasks" element={<TaskList/>}/>  */}
        </Route> 
        

        <Route path="/errorPage" element={<ErrorPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
