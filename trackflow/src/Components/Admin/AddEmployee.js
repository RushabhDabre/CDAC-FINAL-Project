import React, { useRef } from 'react';
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function AddEmployee() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();
    return (
    <div className="container d-flex justify-content-center">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width": '40rem'}}>
                    <h5 className="d-flex mb-4 text-dark"><b>Add Employee</b></h5>      
                    <form >
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Name</h6></label>
                            <input  type="text" placeholder="e.g. John Week" className="form-control" />
                        </div>
                        <div className="row align-items-center d-flex justify-content-center mb-3">
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Email</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="email" placeholder="e.g. jw@gmail.com" className="form-control" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Phone No</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="number" placeholder="e.g. 9876543210" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>username</h6></label>
                            <input  type="text" placeholder="e.g. johnweek" className="form-control" />
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Password</h6></label>
                            <input  type="text" placeholder="***********" className="form-control" />
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Confirm Password</h6></label>
                            <input  type="text" placeholder="***********" className="form-control" />
                        </div>
                        
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto ">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Create Project</button>
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