import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useReducer, useRef, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function AddEmployee() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();
    const [msg, setMsg] = useState("");

    //info - about one user, initial state
    const init = {
        username:"",
        password:""
    }

    useEffect(()=>{
        localStorage.setItem("accessToken",JSON.stringify(msg));
    });

    const reducer = (state,action) => {
        switch(action.type){
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    const [info, dispatch] = useReducer(reducer,init);

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/login",reqOptions)
        // .then(resp => resp.text())
        .then(resp => {
            if(resp.ok){
                return resp.text();
            }else{
                throw new Error("Server Side Error");
            }
        })
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
            setMsg(obj.accessToken);
            // setMsg(obj);
            console.log(msg);
            if(Object.keys(obj).length === 0){
                alert("Wrong usrname/password");
            }else{
                const role_id = obj.roles[0]; // Assuming roles is an array
                if(role_id === "admin"){
                    ref.current.complete();
                    setTimeout(() => navigate("/admin_dashboard"), 500);
                } else if(role_id === "pm"){
                    ref.current.complete();
                    setTimeout(() => navigate("/pm_dashboard"), 500);
                } else if(role_id === "employee"){
                    ref.current.complete();
                    setTimeout(() => navigate("/emp_dashboard"), 500);
                }
            }
        })
        .catch((error)=>{alert("server error. Try Again!")});
    }

    return (
    <div className="container d-flex justify-content-center">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width":'25rem'}}>
                    <h3 className="d-flex mb-2 text-dark justify-content-center"><b>LOGIN FORM</b></h3>      
                    <form method='post'>                       
                        <div className="mb-3">   
                            <label htmlFor='username' className='text-muted'><h6>username</h6></label>
                            <input type="text" id='username' name='username' placeholder="e.g. John Week" className="form-control"
                            value={info.username} onChange={(e)=>{dispatch({type:'update',fld:'username', val: e.target.value})}} />
                            <div id='emailHelp' className='form-text'></div>
                        </div>
                        <div className="mb-3">   
                            <label htmlFor='password' className='text-muted'><h6>Password</h6></label>
                            <input type="text" id='password' name='password' placeholder="********" className="form-control" 
                            value={info.password} onChange={(e)=>{dispatch({type:'update',fld:'password', val: e.target.value})}} />
                            <div id='emailHelp' className='form-text'></div>
                        </div>
                        
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto ">
                                <button type="submit" onClick={(e)=> {sendData(e)}} className="btn btn-success w-100 font-weight-bold mt-2" >LOGIN</button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{dispatch({type:'reset'})}}>Cancel</button>
                            </div>
                        </div>
                    </form> 
                       <p className='text-dark'>{JSON.stringify(info)}</p>
                </div> 
            </div>           
        </div>
  )
}
