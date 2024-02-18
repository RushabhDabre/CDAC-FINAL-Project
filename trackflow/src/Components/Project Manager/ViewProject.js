import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";

export default function ViewProject() {
  let navigate = useNavigate();

  useEffect(()=>{
    const loginId = JSON.parse(localStorage.getItem("loggedUser")).id;
    fetch(`http://localhost:8080/getEmployee?loginid=${loginId}`)
    .then(resp=>resp.json())
    .then(empinfo => {
      localStorage.setItem("empinfo",JSON.stringify(empinfo));
    })
  });

  const [projectRecord, setProjectRecord] = useState([]);
  useEffect(() => {
    const eid = JSON.parse(localStorage.getItem("empinfo")).empId;
    fetch(`http://localhost:8080/getProjectByEmpId/${eid}`, {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then(resp => resp.json())
    .then(obj => {
      setProjectRecord(obj);
      localStorage.setItem("projectInfo",JSON.stringify(obj));
    });
  }, []);

  const [teamRecord, setTeamRecord] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/teamList', {
      method: 'GET',
      headers: {'content-type': 'application/json'},
    })
    .then(resp => resp.json())
    .then(obj => {setTeamRecord(obj); console.log(JSON.stringify(teamRecord));});
  }, []);

   

  return (
    <div className="container-fluid ">
          <div className='row'>
            <table className="table table-bordered table-hover" >
              <thead className='table-dark'>
                <tr>
                  <th className="fs-6 fw-medium">PID</th>
                  <th className="fs-6 fw-medium">Title</th>
                  <th className="fs-6 fw-medium">techstack</th>
                  <th className="fs-6 fw-medium">Description</th>
                  <th className="fs-6 fw-medium">Deadline</th>
                  <th className="fs-6 fw-medium">Comments</th>
                  <th className="fs-6 fw-medium">Assign</th>
                </tr>
              </thead>
              <tbody>
                {projectRecord.map((v) => {
                  return (<tr key={v.empId}>
                    <td className="fs-6">{v.pid}</td>
                    <td className="fs-6">{v.title}</td>
                    <td className="fs-6">{v.techstack}</td>
                    <td className="fs-6">{v.description}</td>
                    <td className="fs-6">{v.deadline}</td>
                    <td className="fs-6">{v.comments}</td>
                    <td className="fs-6">
                      <button className="btn btn-info" onClick={()=>navigate('/PM/addTeam')}>Add</button>
                    </td>
                  </tr>);
                })}
              </tbody>
            </table>
          </div>
          <div className='row'>
            <table className="table table-bordered table-hover" >
              <thead className='table-dark'>
                <tr>
                  <th className="fs-6 fw-medium fs-6">Employee Name</th>
                  <th className="fs-6 fw-medium fs-6">Comments</th>
                  <th className="fs-6 fw-medium fs-6">Assigned Date</th>
                </tr>
              </thead>
              <tbody>
                {teamRecord.map((item, index) => {
                  return (<tr key={index}>
                    {item.map((value, subIndex) => (
                      <td className="fs-6 fw-medium fs-6" key={subIndex}>{value}</td>
                    ))}
                    {/* <td className="fs-6">{v.pid}</td> */}
                  </tr>);
                })}
              </tbody>
            </table>
          </div>
    </div>
  )
}
