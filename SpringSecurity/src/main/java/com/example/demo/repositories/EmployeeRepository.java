package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;

@Transactional
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	@Query("select e from Employee e where e.login_id =:l")
	public Employee getEmployee(Login l);
	
	@Query("select e from Employee e where e.login_id in (select l.login_id from Login l where l.active = false)")
	public List<Employee> getListEmployees();
	
//	@Modifying
//	@Query(value="update employees set ")
//	public int UpdateDetails();
	
}