import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';

export default function EmpDashboard() {

  const [value, setValue] = useState(0);
  const [countTask, setCountTask] = useState(0);

  useEffect(() => {
    const loadData = () => {
      const empInfo = JSON.parse(localStorage.getItem("empinfo"));
      if (empInfo && empInfo.empId) {
        const empId = empInfo.empId;
        console.log(empId);
        fetch(`http://localhost:8080/dasboardDataByEmp/${empId}`)
          .then(resp => resp.json())
          .then(data => {
            setValue(data);
          })
          .catch(error => {
            console.error('Error fetching dashboard data:', error);
          });

        fetch(`https://localhost:7078/GetCompletedTaskCount?EmpId=${empId}`)
          .then(resp => resp.json())
          .then(data => {
            setCountTask(data);
          })
          .catch(error => {
            console.error('Error fetching dashboard data:', error);
          });
      } else {
        console.log('empinfo or empId is null or undefined');
      }
    };

    loadData();

    const timeout = setTimeout(loadData, 100); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main >
      <div className='main-title'>
        <h3 className='text-dark'>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3 className='fs-6'>No of Project Assigned</h3>
                <BsFillArchiveFill className='card_icon fs-6'/>
            </div>
            <h1 className='fs-6'>{value.pworkedon}</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3 className='fs-6'>No of Task Completed</h3>
                <BsFillGrid3X3GapFill className='card_icon fs-6'/>
            </div>
            <h1 className='fs-6'>{countTask}</h1>
        </div>
      </div>
    </main>
  )
}
