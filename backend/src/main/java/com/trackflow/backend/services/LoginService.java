package com.trackflow.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.trackflow.backend.entities.Employee;
import com.trackflow.backend.repositories.EmployeeRepository;

public class EmployeeServices {
	@Autowired
	EmployeeRepository crepo;
	
	public List<Employee> getAll(){
		return crepo.findAll();
	}
}
