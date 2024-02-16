package com.example.demo.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Designation;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;

@Transactional
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	@Query("select e from Employee e where e.login_id =:l")
	public Employee getEmployee(Login l);
	
	@Query("select e from Employee e where e.login_id in (select l.login_id from Login l where l.active = true)")
	public List<Employee> getActiveEmployees();
	
//	@Query(value = "select e.*,l.* from employees e join login l on e.login_id = l.login_id and l.status = 1",nativeQuery = true)
//	public List<Employee> getActiveEmployees();
	
	@Modifying
	@Query(value ="update employees e join login l on e.login_id = l.login_id set e.basicsal = ?2, e.incentives = ?3, e.designation_id = ?4, l.role_id = ?5 where e.empid = ?1;", nativeQuery = true)
	public int UpdateAll(int empid, double basicsal, double incentives, int designation_id, int login_id);

	@Modifying
	@Query(value ="update employees e join login l on e.login_id = l.login_id set l.status = 0 where e.empid = ?1;", nativeQuery = true)
	public int InactiveAcc(int empid);
}