import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useRef ,useState,useEffect , useReducer} from 'react'
import {  json, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function CreateProject() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();

    const [managers, setManagers] = useState([]);
    const [clients, setClinets] = useState([]);

    const init = {
        title: '',
        techstack: '',
        description: '',
        deadline: '',
        status:'',
        comments:'',
        empid:0,
        clientid:0
    }

    const reducer = (state,action) => {
        switch(action.type){
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    const [project ,dispatch] =useReducer(reducer,init);

    const sendData = (e) => {
        e.preventDefault(); 
    
        fetch('http://localhost:8080/createProject', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(project) 
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to add project');
            }
        })
        .then(obj => {
            alert("Created Project Successfully");
            console.log(JSON.stringify(obj));
        })
        .catch(error => {
            console.error('Error adding project:', error);
        });
    };
    

    useEffect(() => {
        fetch('http://localhost:8080/getManagers', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            setManagers(data);
            // data.forEach(manager => console.log(manager.empId));
        })
        .catch(error => {
            console.error('Error fetching managers:', error);
        });
    }, []);
    

      useEffect(() => {
        fetch('http://localhost:8080/getClients',{
            method:'GET',
            headers:{'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            setClinets(data);
            // console.log(JSON.stringify(data.clientid));
        })
        .catch(error => {
          console.error('Error fetching managers:', error);
        });
      }, []);


      
    // const handleManagerChange = (event) => {
    //     setSelectedManagerId(event.target.value);
    //     console.log(selectedManagerId)
    // };
       
    // const handleClientChange = (event) => {
    //     dispatch({type:'update',fld:'clientid', val: e.target.value});
    // };

  return ( 
        <div className="container d-flex justify-content-center ">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width": '40rem'}}>
                    <h5 className="d-flex mb-4 text-dark"><b>Add New Project</b></h5>      
                    <form onSubmit={sendData}>
                        <div className="mb-3">   
                            <label className='text-dark'><h6>Project Title</h6></label>
                            <input  type="text" placeholder="e.g. TrackFlow - Task Progress Manager" className="form-control" name='title' 
                            value={project.title} onChange={(e)=>{dispatch({type:'update',fld:'title', val: e.target.value})}} required />
                        </div>
                        <div className="mb-3">   
                        {/* e.target.value */}
                            <label className='text-muted'><h6>Description</h6></label> 
                            <textarea placeholder="e.g. Create a Task Progress Manager system for......" rows="8" className="form-control" name='description' 
                            value={project.description} onChange={(e)=>{dispatch({type:'update',fld:'description', val: e.target.value})}} required/>
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Techstack</h6></label>
                            <input  type="text" placeholder="e.g. MERN Stack, Mysql for db,......." className="form-control" name='techstack' 
                            value={project.techstack} onChange={(e)=>{dispatch({type:'update',fld:'techstack', val: e.target.value})}} required/>
                        </div>

                        <div>
                        <div className="col-6">   
                            <label className='text-muted'><h6>Deadline</h6></label>
                            <input  type="date" className="form-control" name="deadline" 
                            value={project.deadline} onChange={(e)=>{dispatch({type:'update',fld:'deadline', val: e.target.value})}} required/>
                        </div>

                        <div className="mb-3">   
                            <label className='text-muted'><h6>Comments</h6></label>
                            <textarea placeholder="e.g. Create a Task Progress Manager system for......" rows="8" className="form-control" name='comments' 
                            value={project.comments} onChange={(e)=>{dispatch({type:'update',fld:'comments', val: e.target.value})}} required/>
                        </div>
                    
                        <div className='text-dark'>
                            <label htmlFor="managerSelect">Select Manager:</label>
                            <select id="empid" name='empid' onChange={(e) => { dispatch({ type: 'update', fld: 'empid', val: e.target.value }) }}>
                                <option value="">Select a Manager</option>
                                {managers.map(manager => (
                                    <option className='text-dark' key={manager.empId} value={manager.empId}>{manager.fullName}</option>
                                ))}
                            </select>
                        </div>
  

                        <br/>    
                       <div className='text-dark'>
                       <label>Status:</label>
                        <select name="status" value={project.status} onChange={(e)=>{dispatch({type:'update',fld:'status', val: e.target.value})}} required>
                        <option name="status" Value={"To-do"} > To-do</option>
                        <option name="status" Value={"In-Progress"}> In-Progress</option>
                        <option name="status" Value={"Almost-Done"}> Almost-Done</option>
                        <option name="status" Value={"Done"}> Done</option>
                        </select>
                       </div>
                       <br/>    
                       
                       <div className='text-dark'>
                            <label htmlFor="managerSelect">Select Client:</label>
                            <select id="clientid" name='clientid' onChange={(e) => { dispatch({ type: 'update', fld: 'clientid', val: e.target.value }) }}>
                                <option value="" selected>Select a Client</option>
                                {clients.map(client => (
                                    <option className='text-dark' key={client.clientid} value={client.clientid}>{client.clientname}</option>
                                ))}
                            </select>
                        </div>
  
                             
                        
                        </div>
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto ">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Create Project</button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2">Cancel</button>
                            </div>
                        </div>
                            
                        <div className='text-dark'>{JSON.stringify(project)}</div>

                    </form>    
                </div> 
            </div>           
        </div>
  )
}