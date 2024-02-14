package com.example.demo.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Designation;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;
import com.example.demo.repositories.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository erepo;
	
	public Employee saveEmployee(Employee emp)
	{
		Employee saved = null;
		try {
			saved = erepo.save(emp);
		}
		catch (Exception e) {
			saved = null;
		}
		return saved;
	}
	
	public Employee getEmployee(Login l)
	{
		return erepo.getEmployee(l);
	}
	
	public List<Employee> getEmployees()
	{
		return erepo.getListEmployees();
	}
	
	public List<Employee> getAllEmp(){
		return erepo.findAll();
	}
	
	public Employee getEmpById(int id) {
		Employee emp = null;
		Optional<Employee> opt_emp = erepo.findById(id);
		try {
			emp = opt_emp.get();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return emp;
	}
	
	public int UpdateAll(int empid, String fullname, Date dob, String gender, String nationality, String email, String contact, String currentaddress, String permanentaddress, double basicsal, double incentives, Date hiredate, int designation_id, int login_id) {
		return erepo.UpdateAll(empid, fullname, dob, gender, nationality, email, contact, currentaddress, permanentaddress, basicsal, incentives, hiredate, designation_id, login_id);
	}
	
}