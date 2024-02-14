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
	
	@Query("select e from Employee e where e.login_id in (select l.login_id from Login l where l.active = false)")
	public List<Employee> getListEmployees();
	
	@Modifying
	@Query(value ="update employees set fullname=?2, dob=?3, gender=?4, nationality=?5, email=?6, contact=?7, currentaddress=?8, permanentaddress=?9, basicsal=?10, incentives=?11, hiredate=?12, designation_id=?13, login_id=?14 where empid = ?1", nativeQuery= true)
	public int UpdateAll(int empid, String fullname, Date dob, String gender, String nationality, String email, String contact, String currentaddress, String permanentaddress, double basicsal, double incentives, Date hiredate, int designation_id, int login_id);

}