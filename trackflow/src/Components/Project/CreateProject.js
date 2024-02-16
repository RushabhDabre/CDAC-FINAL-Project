import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useRef ,useState,useEffect} from 'react'
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function CreateProject() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();

    const [managers, setManagers] = useState([]);
    const [selectedManagerId, setSelectedManagerId] = useState(null);
    const [selectedClientId,setSelectedClientId] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        techstack: '',
        description: '',
        deadline: '',
        status:'',
        comments:'',
        empid:'',
        clientid:''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://localhost:7077/api/Projects/AddProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: formData.title,
                description: formData.description,
                techstack: formData.techstack,
                deadline: formData.deadline,
                managerId: selectedManagerId,
                status: formData.status,
                comments: formData.comments,
                empid: selectedManagerId,
                clientid: selectedClientId
            })
        })
        .then(response => {
            if (response.ok) {
                navigate("/");
            } else {
                throw new Error('Failed to add project');
            }
        })
        .catch(error => {
            console.error('Error adding project:', error);
        });
    };



    useEffect(() => {
        fetch('https://localhost:7077/api/Projects/GetManagers')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch managers');
            }
            return response.json();
          })
          .then(data => {
            setManagers(data);
          })
          .catch(error => {
            console.error('Error fetching managers:', error);
          });
      }, []);
      
            const handleManagerChange = (event) => {
                setSelectedManagerId(event.target.value);
                console.log(selectedManagerId)
            };





  return ( 
        <div className="container d-flex justify-content-center ">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width": '40rem'}}>
                    <h5 className="d-flex mb-4 text-dark"><b>Add New Project</b></h5>      
                    <form >
                        <div className="mb-3">   
                            <label className='text-dark'><h6>Project Title</h6></label>
                            <input  type="text" placeholder="e.g. TrackFlow - Task Progress Manager" className="form-control" name='title' value={formData.title}/>
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Description</h6></label>
                            <textarea placeholder="e.g. Create a Task Progress Manager system for......" rows="8" className="form-control" name='description' value={formData.description}/>
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Techstack</h6></label>
                            <input  type="text" placeholder="e.g. MERN Stack, Mysql for db,......." className="form-control" name='techstack' value={formData.techstack}/>
                        </div>

                        <div>
                        <div className="col-6">   
                            <label className='text-muted'><h6>Deadline</h6></label>
                            <input  type="date" className="form-control" name="deadline" value={formData.deadline}/>
                        </div>

                        <div className="mb-3">   
                            <label className='text-muted'><h6>Comments</h6></label>
                            <textarea placeholder="e.g. Create a Task Progress Manager system for......" rows="8" className="form-control" name='comments' value={formData.comments}/>
                        </div>
                    
                        <div className='text-dark'>
                        <label htmlFor="managerSelect">Select Manager:</label>
                        <select id="managerSelect" value={selectedManagerId} onChange={handleManagerChange}>
                            <option value="">Select a Manager</option>
                            {managers.map(manager => (
                            <option className='text-dark' key={manager.empid} value={manager.empid}>{manager.fullname}</option>
                            ))}
                        </select>
                        </div>  

                        <br/>    
                       <div className='text-dark'>
                       <label htmlFor="managerSelect">Select Manager:</label>
                        <select name="status" value={formData.status}>
                        <option name="status" Value={"To-do"} > To-do</option>
                        <option name="status" Value={"In-Progress"}> In-Progress</option>
                        <option name="status" Value={"Almost-Done"}> Almost-Done</option>
                        <option name="status" Value={"Done"}> Done</option>
                        </select>
                       </div>
                       <br/>    
                       
                        <div className='text-dark'>
                        <label htmlFor="managerSelect">Select Manager:</label>
                        <select name='clientid'>
                          <option name="clientid" defaultValue={1} value={formData.clientid}>Client - 1 </option>
                        </select>   
                        </div>     
                        <br/>                 
                        
                        </div>
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto ">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Create Project</button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{ref.current.complete(); setTimeout(() => navigate("/"), 500);}}>Cancel</button>
                            </div>
                        </div>
                            
                        <div>formData</div>

                    </form>    
                </div> 
            </div>           
        </div>
  )
}