package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AddEmployee;
import com.example.demo.entities.Designation;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.DesignationService;
import com.example.demo.services.EmployeeService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	@Autowired
	EmployeeService eservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	DesignationService dservice;
	
	@Autowired
	PasswordEncoder encoder;
	
 	@GetMapping("/getEmployee")
 	public Employee getEmployee(@RequestParam("loginid") int loginid)
 	{
 		Login l = lservice.getLogin(loginid);
 		return eservice.getEmployee(l);
 	}
	
 	@PostMapping("/regEmployee")
 	public Employee regEmployee(@RequestBody AddEmployee emp)
 	
 	{
 		System.out.println(emp);
 		Role r = rservice.getById(emp.getRole_id());
 		Login l = new Login(emp.getUsername(), encoder.encode(emp.getPassword()), r, false);
 		Designation d = dservice.getById(emp.getDesignationID()); 		
 		Login saved=lservice.save(l);
 		
 		Employee e= new Employee(emp.getFullname(),emp.getDob(),emp.getGender(),emp.getNationality() ,emp.getEmail(),emp.getPhNo(),emp.getCurrentAddress(),emp.getPermanentAddress(),emp.getBasicSal(), emp.getIncentives(), emp.getHireDate(), d, saved);
 		
 		return eservice.saveEmployee(e);	
 	}
}
