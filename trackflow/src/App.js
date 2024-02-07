import { React } from 'react';
import {Route, Routes} from 'react-router-dom';
import CreateProject from './Components/CreateProject';
import AddEmployee from './Components/AddEmployee';
import CreateTask from './Components/CreateTask';
import './App.css';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className='App-header'>  
      <TaskList/>    
      <Routes>
        {/* <Route path="/" element={<CreateTask/>}/> */}
        {/* <Route path="/" element={<CreateTask/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
