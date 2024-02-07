import React, { useRef } from 'react';
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function CreateTask() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();
    return (
        <div className="container d-flex justify-content-center ">
        <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
        <div className='container d-flex justify-content-center'>
            <div className="shadow-lg p-4 m-5" style={{"width": '40rem'}}>
                <h5 className="d-flex mb-4"><b>Add New Task</b></h5>      
                <form >
                    <div className="mb-3">   
                        <label className='text-muted'><h6>Task Name</h6></label>
                        <input  type="text" placeholder="e.g. login component" className="form-control" />
                    </div>
                    <div className="mb-3">   
                        <label className='text-muted'><h6>Description</h6></label>
                        <textarea placeholder="e.g. dot.net web API for backend" rows="8" className="form-control" />
                    </div>
                    
                    <div className="mb-3">   
                        <label className='text-muted'><h6>Deadline</h6></label>
                        <input  type="date" className="form-control" />
                    </div>
                    {/* Task Assign to remainig..... */}
                    
                    <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                        <div className="col-auto ">
                            <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Create Task</button>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{ref.current.complete(); setTimeout(() => navigate("/"), 500);}}>Cancel</button>
                        </div>
                    </div>
                </form>    
            </div> 
        </div>           
    </div>
  )
}