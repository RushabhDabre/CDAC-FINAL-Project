import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useReducer, useRef, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useForm } from "react-hook-form";

export default function AddEmployee() {
    const ref = useRef(null) //used for Loading Bar
    let navigate = useNavigate();
    const { register, formState: {errors , isValid}, watch } = useForm({mode: 'all'});
    const [isVisible, setVisible] = useState(true);
    const [msg, setMsg] = useState("");
    const [error, setErrors] = useState("");

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

            if(Object.keys(obj).length === 0){
                alert("Wrong usrname/password");
            }else{
                localStorage.setItem("loggedUser", JSON.stringify(obj));
                const role_id = obj.roles[0]; // Assuming roles is an array
                if(role_id === "admin"){
                    ref.current.complete();
                    setTimeout(() => navigate("/admin_dashboard"), 500);
                } else if(role_id === "project_manager"){
                    ref.current.complete();
                    setTimeout(() => navigate("/pm_dashboard"), 500);
                } else if(role_id === "employee"){
                    ref.current.complete();
                    setTimeout(() => navigate("/emp_dashboard"), 500);
                }
            }
        })
        .catch((error)=>{
            setErrors("username or password is incorrect");
            setVisible(false);
            setTimeout(() => setVisible(true), 2000);
        });
    }

    return (
    <div className="container d-flex justify-content-center">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width":'25rem'}}>
                    <h3 className="d-flex mb-2 text-dark justify-content-center"><b>LOGIN FORM</b></h3>      
                    <div className={`border border-danger  ${isVisible ? 'd-none' : ''} d-flex justify-content-center`}><strong className="text-danger fs-6">{error}</strong></div>
                    <form method='post'>                       
                        <div className="mb-3">   
                            <label htmlFor='username' className='text-muted'><h6>username</h6></label>
                            <input type="text" id='username' name='username' placeholder="e.g. John Week" className="form-control"
                            {...register("username",{ required: true, pattern: /^[a-zA-Z][a-zA-Z0-9_]{6,15}$/})} //for Validation
                            value={info.username} onChange={(e)=>{dispatch({type:'update',fld:'username', val: e.target.value})}} />
                            <span className='text-danger fs-6'>{errors.username?.type === "required" && "feild is required"}{errors.username?.type === "pattern" && "First letter must be Alphabet and only underscore is allowed!!"}</span>
                        </div>
                        <div className="mb-3">   
                            <label htmlFor='password' className='text-muted'><h6>Password</h6></label>
                            <input type="password" id='password' name='password' placeholder="********" className="form-control" 
                            {...register("password",{ required: true, pattern: /^[A-Za-z\d@$!%*?&]{8,12}$/})} //for Validation
                            value={info.password} onChange={(e)=>{dispatch({type:'update',fld:'password', val: e.target.value})}} />
                            <span className='text-danger fs-6'>{errors.password?.type === "required" && "You must specify a password"}{errors.password?.type === "pattern" && "Password must be between 8 - 12 words!"}</span >
                        </div>
                        
                        <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                            <div className="col-auto">
                                <button type="button" className="btn btn-danger w-100 font-weight-bold mt-2" onClick={()=>{ref.current.complete(); setTimeout(() => navigate("/"), 500);}}>Cancel</button>
                            </div>
                            <div className="col-auto ">
                                <button type="submit" onClick={(e)=> {sendData(e)}} className="btn btn-primary w-100 font-weight-bold mt-2" disabled={!isValid} >LOGIN</button>
                            </div>
                        </div>
                    </form> 
                       {/* <p className='text-dark'>{JSON.stringify(info)}</p> */}
                </div> 
            </div>           
        </div>
  )
}
