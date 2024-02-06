import React, { useRef } from 'react'
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function CreateProject() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();

  return (
        <div className="container d-flex justify-content-center ">
            <LoadingBar color="#f11946" ref={ref} shadow={true} />
            <div className="shadow-lg p-4 m-5" style={{"width": '25rem'}}>
                <h1 className="d-flex justify-content-center text-success mb-3">Create Project</h1>      
                <form >
                    <div className="mb-3">   
                        <input  type="text" placeholder="Text" className="form-control" />
                    </div>
                    <div className="mb-3">   
                        <input  type="text" placeholder="Text" className="form-control" />
                    </div>
                    <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                        <div className="col-auto ">
                            <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Create Project</button>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" on>Cancel</button>
                        </div>
                    </div>
                </form>    
            </div> 
        </div>
  )
}
