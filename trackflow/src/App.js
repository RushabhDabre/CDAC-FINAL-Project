import { React } from 'react';
import {Route, Routes} from 'react-router-dom';
import CreateProject from './Components/CreateProject';
import AddEmployee from './Components/AddEmployee';
import CreateTask from './Components/CreateTask';
import './App.css';
import TaskList from './Components/TaskList';
import Login from './Components/Login'

function App() {
  return (
    <div className='App-header'>  
      <TaskList/>    
      <Routes>
        {/* <Route path="/" element={<CreateTask/>}/> */}
        {/* <Route path="/" element={<CreateTask/>}/> */}
         { <Route path="/" element={<Login/>}/>}

      </Routes>
    </div>
  );
}

export default App;
