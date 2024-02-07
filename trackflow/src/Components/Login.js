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
                <div className=" shadow-lg p-3 t-2 m-2" style={{"width":'25rem'}}>
                    <h5 className="d-flex mb-4"><b>Login form</b></h5>      
                    <form >
                       <h1 className='text-muted' style={{textAlign:'center'}}>LOGIN PAGE</h1>
                       
                        <div className="mb-3">   
                            <label className='text-muted'><h6>username</h6></label>
                            <input  type="text" placeholder="e.g. John Week" className="form-control" />
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Password</h6></label>
                            <input  type="text" placeholder="********" className="form-control" />
                        </div>
                        {/* <div className="mb-3">   
                            <label className='text-muted'><h6>Confirm Password</h6></label>
                            <input  type="text" placeholder="*" className="form-control" />
                        </div> */}
                        
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto ">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >LOGIN</button>
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
