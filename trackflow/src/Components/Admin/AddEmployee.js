import React, { useEffect, useRef , useReducer} from 'react';
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import { useState } from 'react';



export default function AddEmployee() {
    const ref = useRef(null)
    let navigate = useNavigate();
    // const [msg , setmsg] = useState("");

    const init ={
        fullname: "",
        dob: "",
        gender: "",
        nationality: "",
        email: "",
        phNo: "",
        currentAddress:"",
        permanentAddress:"",
        basicSal:0,
        incentives:0,
        hireDate:"",
        did:0,
        username:"",
        password:"",
        roleid:0
       }
    
       const reducer = (state,action) => {
        switch(action.type){
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
            }
        }

        const [user ,dispatch] =useReducer(reducer,init);

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(user)
        }
        fetch("http://localhost:8080/regEmployee",reqOptions)
        .then(res=>res.json())
        .then(obj=>{
            console.log(JSON.stringify(obj));
        })
        // .catch((error)=>{alert("server error. Try Again!")});
    }

    return (
    <div className="container d-flex justify-content-center">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width": '40rem'}}>
                    <h5 className="d-flex mb-4 text-dark"><b>Add Employee</b></h5>      
                    <form >
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Name</h6></label>
                            <input  type="text" placeholder="e.g. John Week" className="form-control" name='fullname'
                            value={user.fullname} onChange={(e)=>{dispatch({type:'update',fld:'fullname', val: e.target.value})}} />
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>DOB</h6></label>
                            <input  type="date" placeholder="" className="form-control" name='dob'
                            value={user.dob} onChange={(e)=>{dispatch({type:'update',fld:'dob', val: e.target.value})}} />
                          
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Gender</h6></label><br/>
                            <label className='text-muted px-2'><h6>Male</h6></label>
                            <input type="radio" name="gender"
                            value="M" onChange={(e)=>{dispatch({type:'update',fld:'gender', val: e.target.value})}} />
                            <label className='text-muted px-2'><h6>Female</h6></label>
                            <input type="radio" name="gender"
                            value="F" onChange={(e)=>{dispatch({type:'update',fld:'gender', val: e.target.value})}} />           
                        </div>

                        <div className="row align-items-center d-flex justify-content-center mb-3">
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Email</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="email" placeholder="e.g. jw@gmail.com" className="form-control" 
                                    value={user.email} onChange={(e)=>{dispatch({type:'update',fld:'email', val: e.target.value})}} />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Phone No</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="number" placeholder="e.g. 9876543210" className="form-control" 
                                    value={user.phNo} onChange={(e)=>{dispatch({type:'update',fld:'phNo', val: e.target.value})}} />
                                </div>                                
                            </div>
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Nationality</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="text" placeholder="country" className="form-control" 
                                    value={user.nationality} onChange={(e)=>{dispatch({type:'update',fld:'nationality', val: e.target.value})}} />
                                </div>                                
                            </div>
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Current Address</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="textbox" placeholder="Add Address" className="form-control" 
                                    value={user.currentAddress} onChange={(e)=>{dispatch({type:'update',fld:'currentAddress', val: e.target.value})}} />
                                </div>                                
                            </div>
                            <div className='col-6'>
                                <div>   
                                    <label className='text-muted'><h6>Permanent Address</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="textbox" placeholder="Add Address" className="form-control" 
                                    value={user.permanentAddress} onChange={(e)=>{dispatch({type:'update',fld:'permanentAddress', val: e.target.value})}} />
                                </div>                                
                            </div>
                        </div>
                        <div className="row align-items-center d-flex justify-content-center mb-3">
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Designation</h6></label>
                            <select name="designation" 
                            value={user.did} onChange={(e)=>{dispatch({type:'update',fld:'did', val: e.target.value})}}>



                            </select>
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Role</h6></label>
                            <select name="role"
                            value={user.roleid} onChange={(e)=>{dispatch({type:'update',fld:'roleid', val: e.target.value})}} >



                            </select>
                        </div>
                        
                        <div className="mb-3">   
                            <label className='text-muted'><h6>basicSal</h6></label>
                            <input  type="number" placeholder="e.g. johnweek" className="form-control" name= 'basicSal'
                             value={user.basicSal} onChange={(e)=>{dispatch({type:'update',fld:'basicSal', val: e.target.value})}} />
                        </div>
                        
                        
                        <div className="mb-3">   
                            <label className='text-muted'><h6>incentives</h6></label>
                            <input  type="number" placeholder="e.g. johnweek" className="form-control"  name='incentives'
                             value={user.incentives} onChange={(e)=>{dispatch({type:'update',fld:'incentives', val: e.target.value})}} />
                        </div>

                        <div className="mb-3">   
                            <label className='text-muted'><h6>HireDate</h6></label>
                            <input  type="date" placeholder="" className="form-control" name='hireDate'
                            value={user.hireDate} onChange={(e)=>{dispatch({type:'update',fld:'hireDate', val: e.target.value})}} />
                          
                        </div>

                        <div className="mb-3">   
                            <label className='text-muted'><h6>username</h6></label>
                            <input  type="text" placeholder="e.g. johnweek" className="form-control" 
                             value={user.username} onChange={(e)=>{dispatch({type:'update',fld:'username', val: e.target.value})}} />
                        </div>
                        <div className="mb-3">   
                            <label className='text-muted'><h6>Password</h6></label>
                            <input  type="text" placeholder="***********" className="form-control"
                            value={user.password} onChange={(e)=>{dispatch({type:'update',fld:'password', val: e.target.value})}} />
                        </div>
                        {/* <div className="mb-3">   
                            <label className='text-muted'><h6>Confirm Password</h6></label>
                            <input  type="text" placeholder="***********" className="form-control" /> 
                             value={user.password} onChange={(e)=>{dispatch({type:'update',fld:'password', val: e.target.value})}} 
                        </div> */}
                        
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto ">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" onClick={(e)=>{sendData(e)}} >Add Employee</button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{ref.current.complete(); setTimeout(() => navigate("/"), 500);}}>Cancel</button>
                            </div>
                        </div>
                        </div>
                    </form>   
                    <div className='text-dark'>{JSON.stringify(user)}</div> 
                </div> 
            </div>           
        </div>
  )
}