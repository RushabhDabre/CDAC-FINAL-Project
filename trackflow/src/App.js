import { React } from 'react';
import {Route, Routes} from 'react-router-dom';
import CreateProject from './Components/CreateProject';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateProject/>}/>
      </Routes>
    </div>
  );
}

export default App;
