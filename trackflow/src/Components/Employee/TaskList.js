import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { confirmAlert } from '../../../node_modules/react-confirm-alert/lib/index.js';
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';


export default function TaskList() {

  let navigate = useNavigate();
  const [originalRecords, setOriginalRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5); // Default value

  useEffect(() => {    
    const empinfo = JSON.parse(localStorage.getItem("empinfo"));
    const empId = empinfo.empId;  
      fetch(`https://localhost:7078/gettasksbyempid?EmpId=${empId}`, {
        method: 'GET',
        headers: {'content-type': 'application/json'},
      })
      .then(resp => resp.json())
      .then(obj => {
        setOriginalRecords(obj);
        setFilteredRecords(obj);
      });
  },[]);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredRecords.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilter = (e) => {
    const newData = originalRecords.filter(row => {
      return row.tname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredRecords(newData);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const handleRecordsPerPageChange = (e) => {
    setRecordsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing records per page
  };

  
  const [value, setValue] = useState(0);
  
  const getRangeValue = (e,taskId) => {
    const updatedValue = e.target.value; 
    setValue(updatedValue); 
    fetch(`https://localhost:7078/UpdateTaskStatus?taskId=${taskId}&progress=${value*20}`, {
      method: 'POST',
      headers: {'content-type': 'application/json'}
    })
    .then(responseData => {
      console.log(updatedValue*20);
      console.log(filteredRecords[0].progress);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2 d-flex align-items-center">
        <span className='text-black fs-6 me-2'>Show</span>
        <select className='form-select form-select-sm' value={recordsPerPage} onChange={handleRecordsPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <span className='text-black fs-6 ms-2'>entries</span>
      </div>
      <div className='col-7'></div>
      <div className="col-3 mt-2">
        <input className="form-control" type="text" placeholder="Search" onChange={handleFilter} />
      </div>
    </div>
    
    <table className="mt-2 table table-borderedA table-hover" >
      <thead className='table-dark'>
        <tr>
          <th className="fs-6 fw-medium">Task Name</th>
          <th className="fs-6 fw-medium">Description</th>
          <th className="fs-6 fw-medium">Deadline</th>
          <th className="fs-6 fw-medium">Progress</th>
        </tr>
      </thead>
      <tbody>
        {currentRecords.map((v) => {
           return (<tr key={v.tid}>
            <td className="fs-6">{v.tname}</td>
            <td className="fs-6">{v.description}</td>
            <td className="fs-6">{v.deadline}</td>
            <td className="col-2 fs-6 bg-secondary">
              <input type="range" className="form-range" min="0" max="5" id="customRange2" value={value} onChange={(e)=>{getRangeValue(e,v.tid)}}/>
              <p>Value:{value*20}</p>
            </td>
          </tr>);
        })}
      </tbody>
    </table>
    <div className='row '>
      <div className='col-3'>
        <span className='text-black fs-6'>Showing {firstIndex + 1} to {Math.min(lastIndex, filteredRecords.length)} of {filteredRecords.length} records</span>
      </div>
      <div className='col-6'></div>
      <div className='col-3 d-flex justify-content-end'>
        <ul className="pagination">
            <li className="page-item"><a  className="page-link" onClick={prePage}>Prev</a></li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <a  className="page-link" onClick={() => changePage(index + 1)}>{index + 1}</a>
              </li>
            ))}
            <li className="page-item"><a  className="page-link" onClick={nextPage}>Next</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}