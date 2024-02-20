package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
	
	@Query(value = "select count(*) from projects",nativeQuery = true)
	public int countProject();
	
	@Query(value = "select count(*) from projects where empid = ?1",nativeQuery = true)
	public int countProjectForPM(int empid);
	
	@Query(value="select * from projects where empid = :id",nativeQuery = true)
	public List<Project> getProjectByEmpId(int id);
	
	@Query(value="select p.pid from projects p where p.empid = (select e.empid from employees e where e.login_id = :id) ;",nativeQuery = true)
	public List<Project> getProjectByLoginId(int id);
	
	
}
