package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

	@Query(value = "select count(*) from projects", nativeQuery = true)
	public int countProject();

//	count no of project assigned to pm
	@Query(value = "select count(*) from projects where empid = ?1", nativeQuery = true)
	public int countProjectForPM(int empid);

	@Query("select p from Project p where p.status = true")
	public List<Project>getActiveProjects();

	@Query(value = "select * from projects where empid = :id", nativeQuery = true)
	public List<Project> getProjectByEmpId(int id);

	@Query(value = "select p.pid from projects p where p.empid = (select e.empid from employees e where e.login_id = :id) ;", nativeQuery = true)
	public List<Project> getProjectByLoginId(int id);

	@Modifying
	@Query(value = "UPDATE teams AS t JOIN projects AS p ON t.pid = p.pid JOIN tasktable AS tk ON t.pid = tk.pid SET t.status = 0, p.status = 0, tk.status = 0 WHERE t.pid = ?1", nativeQuery = true)
	public int EndProject(int pid);
//	@Query(value = "UPDATE teams AS t JOIN projects AS p ON t.pid = p.pid SET t.status = 0, p.status = 0 WHERE t.pid = ?1", nativeQuery = true)

}


