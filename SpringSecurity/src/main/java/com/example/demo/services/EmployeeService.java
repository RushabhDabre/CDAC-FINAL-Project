package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
	
}