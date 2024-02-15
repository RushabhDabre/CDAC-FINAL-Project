package com.example.demo.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Designation;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.UpdateCompany;
import com.example.demo.repositories.DesignationRepository;
import com.example.demo.repositories.EmployeeRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.RoleRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository erepo;
	
	@Autowired
	LoginRepository lrepo;
	
	@Autowired
	RoleRepository rrepo;
	
	@Autowired
	DesignationRepository drepo;
	
	
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
	
	public Employee UpdateAll(UpdateCompany emp) {//int
		Optional<Employee> empok = erepo.findById(emp.getEmpid());//
		Employee employee = empok.get(); //
		Login login = employee.getLogin_id();//
		Role role = rrepo.findById(emp.getRole_id()).get();
		Designation designation = drepo.findById(emp.getDesignationID()).get();
		login.setRole(role);
		employee.setBasicSal(emp.getBasicSal());
		employee.setIncentives(emp.getIncentives());
		employee.setLogin_id(login);//
		employee.setDesg(designation);
		employee.setEmpId(emp.getEmpid());
		return erepo.save(employee);
	}
	
//	public Employee UpdateAll(int empid, double basicsal, double incentives, int designation_id, int login_id) {
//	return erepo.UpdateAll(empid, basicsal, incentives, designation_id, login_id);
//	}
}