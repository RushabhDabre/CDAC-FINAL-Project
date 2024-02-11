import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect, useRef , useReducer} from 'react';
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function AddEmployee() {
    const ref = useRef(null)
    let navigate = useNavigate();
    const { register, formState: {errors , isValid}, watch } = useForm({mode: 'all'});
    const [isVisible, setVisible] = useState(true);
    const [msg,setmsg]=useState("");

    //for testing
    useEffect(() => {
        console.log("isValid:", isValid);
        console.log("errors:", errors);
    }, [isValid, errors]);
    
    const [allRoles, setAllRoles] = useState([]);
    const [allDesign , setAllDesign] = useState([]);
    
    const access = JSON.parse(localStorage.getItem("accessToken"));
    
    useEffect(()=> {
        fetch("http://localhost:8080/getAllDesign",{
            method: 'GET',
            headers: {Authorization: `Bearer ${access}`}
        })
        .then(resp => resp.json())
        .then(obj => setAllDesign(obj))
    },[]);

    useEffect(()=> {
        fetch("http://localhost:8080/getAllRoles",{
            method: 'GET',
            headers: {Authorization: `Bearer ${access}`}
        })
        .then(resp => resp.json())
        .then(obj => setAllRoles(obj))
    },[]);
    
     
    // useEffect(()=> {
    //     fetch("http://localhost:8080/getAllDesign")
    //     .then(resp => resp.json())
    //     .then(dsg => setAllDesign(dsg))
    // },[]);

    // useEffect(() => {
    //     fetch("http://localhost:8080/getAllRoles")
    //     .then(resp => resp.json())
    //     .then(roles => setAllRoles(roles))
    // }, []);
    

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
        username:"",
        password:"",
        designationID:0,
        role_id:0
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
        .then(res=>{
            setmsg(res);
            if(res.ok){
                return res.json();
            }else{
                setVisible(false)
                setTimeout(() => setVisible(true), 2000);
                throw new Error("Server Error");
            }
        } )
        .then(obj=>{
            ref.current.complete();
            // setTimeout(() => navigate("/login"), 500);
            alert("Regestration Successful");
            console.log(JSON.stringify(obj));
        })
        .catch((error)=>{alert("server error. Try Again!")});
    }

    return (
    <div className="container d-flex justify-content-center">
            <LoadingBar color="#f11946" ref={ref} shadow={true} /> 
            <div className='container d-flex justify-content-center'>
                <div className=" shadow-lg p-4 m-5" style={{"width": '40rem'}}>
                    <h5 className="d-flex mb-4 text-dark"><b>Add Employee</b></h5>      
                    <div className={`border border-danger  ${isVisible ? 'd-none' : ''} d-flex justify-content-center`}><strong className="text-danger">{msg}</strong></div>
                    <form >
                        <div className="form-group ">   
                            <label className='form-label text-muted'><h6>Name</h6></label>
                            <input  type="text" placeholder="e.g. John Week" className="form-control" name='fullname'
                            {...register("name",{required: true})} //for Validation
                            value={user.fullname} onChange={(e)=>{dispatch({type:'update',fld:'fullname', val: e.target.value})}} required />
                            <span className='text-danger fs-6'>{errors.name?.type === "required" && "Name is required!"}</span >
                        </div>
                        <div className="row form-group ">
                            <div className="col-6">   
                                <label className='form-label text-muted'><h6>DOB</h6></label>
                                <input  type="date" placeholder="" className="form-control" name='dob'
                                {...register("dob",{required: true})} //for Validation
                                value={user.dob} onChange={(e)=>{dispatch({type:'update',fld:'dob', val: e.target.value})}} required/> 
                                <span className='text-danger fs-6'>{errors.dob?.type === "required" && "Date of Birth is required!"}</span >
                            </div>
                            
                            <div className="col-6 row mt-2 ">   
                                <label className='text-muted'><h6>Gender</h6></label><br/>
                                <div className='col-6 form-check'>
                                    <label className="text-muted"><h6>Male</h6></label>
                                    <input type="radio" className="form-check-input  form-check-input-sm" name="gender"
                                    {...register("gender",{required: true})} //for Validation
                                    value="M" onChange={(e)=>{dispatch({type:'update',fld:'gender', val: e.target.value})}} />
                                </div>

                                <div className='col-6 form-check'>
                                    <label className='text-muted'><h6>Female</h6></label>
                                    <input type="radio" className="form-check-input form-check-input-lg" name="gender"
                                    {...register("gender",{required: true})} //for Validation
                                    value="F" onChange={(e)=>{dispatch({type:'update',fld:'gender', val: e.target.value})}} />           
                                </div>
                                <span className='text-danger fs-6'>{errors.gender?.type === "required" && "Please select!"}</span>
                            </div>
                        </div>

                        <div className="row form-group ">
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Email</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="email" placeholder="e.g. jw@gmail.com" className="form-control"
                                     {...register("email",{required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i},)} //for Validation
                                    value={user.email} onChange={(e)=>{dispatch({type:'update',fld:'email', val: e.target.value})}} required />
                                    <span className='text-danger fs-6'>{errors.email?.type === "required" && "Email is required!"}{errors.email?.type === "pattern" && "Email is invalid!"}</span >
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Phone No</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="number" placeholder="e.g. 9876543210" className="form-control" 
                                    {...register("phone", {required: true, pattern: /^\d{10,12}$/})} //for Validation
                                    value={user.phNo} onChange={(e)=>{dispatch({type:'update',fld:'phNo', val: e.target.value})}} required/>
                                    <span className='text-danger fs-6'>{errors.phone?.type === "required" && "phone no is required!"}{errors.phone?.type === "pattern" && "Phone no is invalid!"}</span >
                                </div>                                
                            </div>
                        </div>

                        <div className=''>
                            <div className="col-auto ">   
                                <label className='text-muted'><h6>Current Address</h6></label>
                            </div>
                            <div className="col-auto ">   
                                <input  type="textbox" placeholder="Add Address" className="form-control" 
                                {...register("cadr",{required: true})} //for Validation
                                value={user.currentAddress} onChange={(e)=>{dispatch({type:'update',fld:'currentAddress', val: e.target.value})}} required/>
                                <span className='text-danger fs-6'>{errors.cadr?.type === "required" && "Address is required!"}</span>
                            </div>                                
                        </div>

                        <div className=''>
                            <div className="col-auto ">   
                                <label className='text-muted'><h6>Permanent Address</h6></label>
                            </div>
                            <div className="col-auto ">   
                                <input  type="textbox" placeholder="Add Address" className="form-control" 
                                {...register("padr",{required: true})} //for Validation
                                value={user.permanentAddress} onChange={(e)=>{dispatch({type:'update',fld:'permanentAddress', val: e.target.value})}} required/>
                                <span className='text-danger fs-6'>{errors.padr?.type === "required" && "Address is required!"}</span>
                            </div>                                
                        </div>
                        
                        <div className="row form-group ">
                            <div className='col-6'>
                                <div className="col-auto ">   
                                    <label className='text-muted'><h6>Nationality</h6></label>
                                </div>
                                <div className="col-auto ">   
                                    <input  type="text" placeholder="eg. Indian" className="form-control" 
                                    {...register("nation",{required: true})} //for Validation
                                    value={user.nationality} onChange={(e)=>{dispatch({type:'update',fld:'nationality', val: e.target.value})}} required/>
                                    <span className='text-danger fs-6'>{errors.nation?.type === "required" && "Nationality is required!"}</span>
                                </div>                                
                            </div>
                            <div className="col-6">   
                                <label className='text-muted'><h6>HireDate</h6></label>
                                <input  type="date" placeholder="" className="form-control" name='hireDate'
                                {...register("hdate",{required: true})} //for Validation
                                value={user.hireDate} onChange={(e)=>{dispatch({type:'update',fld:'hireDate', val: e.target.value})}} required/>  
                                <span className='text-danger fs-6'>{errors.hdate?.type === "required" && "feild is required"}</span>
                            </div>
                        </div>
                        <div className='row form-group '>
                            <div className="col-6">   
                                <label htmlFor='designation' className='form-label text-muted'><h6>Select Designation : </h6></label>
                                <select className='form-select' id='designationID' name="designationID" 
                                 onChange={(e)=>{dispatch({type:'update',fld:'designationID', val: e.target.value})}} >
                                        {/* <option selected>Select</option> */}
                                    {
                                        allDesign.map(data => {
                                            return <option value={data.designationID}>{data.designationName}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-6">   
                                <label className='form-label text-muted'><h6>Select Role : </h6></label>
                                <select className='form-select' id='role_id' name="role_id" 
                                     onChange={(e)=>{dispatch({type:'update',fld:'role_id', val: e.target.value})}}  >
                                        {/* <option selected>Select</option> */}
                                    {
                                        allRoles.map(data => {
                                            return <option value={data.role_id}>{data.role_name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className='row form-group '>
                            <div className="col-6">   
                                <label className='text-muted'><h6>Basic Salary</h6></label>
                                <input  type="number" placeholder="e.g. johnweek" className="form-control" name= 'basicSal'
                                {...register("sal",{required: true})} //for Validation
                                value={user.basicSal} onChange={(e)=>{dispatch({type:'update',fld:'basicSal', val: e.target.value})}} required/>
                                <span className='text-danger fs-6'>{errors.sal?.type === "required" && "feild is required"}</span>
                            </div>
                                        
                            <div className="col-6">   
                                <label className='text-muted'><h6>Incentives</h6></label>
                                <input  type="number" placeholder="e.g. johnweek" className="form-control"  name='incentives'
                                {...register("inc",{required: true})} //for Validation
                                value={user.incentives} onChange={(e)=>{dispatch({type:'update',fld:'incentives', val: e.target.value})}} required/>
                                <span className='text-danger fs-6'>{errors.inc?.type === "required" && "feild is required"}</span>
                            </div>
                        </div>

                        <div className="form-group ">   
                            <label className='text-muted'><h6>username</h6></label>
                            <input  type="text" placeholder="e.g. johnweek" className="form-control" 
                            {...register("username",{ required: true, pattern: /^[a-zA-Z][a-zA-Z0-9_]{6,15}$/})} //for Validation
                            value={user.username} onChange={(e)=>{dispatch({type:'update',fld:'username', val: e.target.value})}} required/>
                            <span className='text-danger fs-6'>{errors.username?.type === "required" && "feild is required"}{errors.username?.type === "pattern" && "First letter must be Alphabet and only underscore is allowed!!"}</span>
                        </div>
                        
                        <div className="form-group ">   
                            <label className='text-muted'><h6>Password</h6></label>
                            <input  type="password" placeholder="***********" className="form-control"
                            {...register("password",{ required: true, pattern: /^[A-Za-z\d@$!%*?&]{8,12}$/})} //for Validation
                            name="password" value={user.password} onChange={(e)=>{dispatch({type:'update',fld:'password', val: e.target.value})}} required/>
                            <span className='text-danger fs-6'>{errors.password?.type === "required" && "You must specify a password"}{errors.password?.type === "pattern" && "Password must be between 8 - 12 words!"}</span >
                        </div>
                        
                        <div className="form-group ">   
                            <label className='text-muted'><h6>Confirm Password</h6></label>
                            <input  type="password" placeholder="***********" className="form-control" 
                            {...register("confirm_password",{ required: true, validate: (val) => { return (watch('password') === val || "Your passwords do no match");},})} required/>
                            <span className='text-danger fs-6'>{errors.confirm_password?.message}</span>
                        </div>
                        
                        <div className="row g-3 align-items-center d-flex justify-content-center ">
                            <div className="col-auto ">
                                <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" disabled={!isValid} onClick={(e)=>{sendData(e)}} >Add Employee</button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{ref.current.complete(); setTimeout(() => navigate("/"), 500);}}>Cancel</button>
                            </div>
                        </div>
                    </form>   
                    <div className='text-dark'>{JSON.stringify(user)}</div> 
                </div> 
            </div>           
        </div>
  )
}