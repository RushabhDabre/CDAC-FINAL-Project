package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;
import jakarta.transaction.Transactional;

@Transactional
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	@Query("select e from Employee e where e.login_id =:l")
	public Employee getEmployee(Login l);
	
	@Query("select e from Employee e where e.login_id in (select l.login_id from Login l where l.active = true)")
	public List<Employee> getActiveEmployees();
	/*
	 SELECT e.* FROM employees e JOIN login l ON e.login_id = l.login_id LEFT JOIN teams t ON e.empid = t.empid WHERE l.status = 1 AND (t.status = 0 OR t.status IS NULL);
	 * */
	@Query(value = "SELECT e.* FROM employees e JOIN login l ON e.login_id = l.login_id LEFT JOIN teams t ON e.empid = t.empid WHERE l.status = 1 AND (t.status = 0 OR t.status IS NULL) AND l.role_id = 2;",nativeQuery = true)
	public List<Employee> getBenchEmployees();
	
	@Modifying
	@Query(value ="update employees e join login l on e.login_id = l.login_id set e.basicsal = ?2, e.incentives = ?3, e.designation_id = ?4, l.role_id = ?5 where e.empid = ?1;", nativeQuery = true)
	public int UpdateAll(int empid, double basicsal, double incentives, int designation_id, int login_id);

	@Modifying
	@Query(value ="update employees e join login l on e.login_id = l.login_id set l.status = 0 where e.empid = ?1;", nativeQuery = true)
	public int InactiveAcc(int empid);
	
	@Query(value="SELECT * FROM employees e WHERE e.login_id IN ( SELECT l.login_id FROM login l WHERE l.status = 0 AND l.role_id = 2);",nativeQuery = true)
	public List<Employee> getManagers();
	
}

/*
 DELIMITER //
CREATE TRIGGER insert_team_after_project_insert
AFTER INSERT ON projects
FOR EACH ROW
BEGIN
    INSERT INTO teams (pid, empid, comments, assigned_date, status, releasedate)
    VALUES (NEW.pid, NEW.empid, 'You are the team lead of this project', CURRENT_DATE, 1, NULL);
END //
DELIMITER ;

 */


/*
 * 
 SELECT e.*
FROM employees e
JOIN login l ON e.login_id = l.login_id
LEFT JOIN teams t ON e.empid = t.empid
WHERE l.role_id = 2
AND t.releasedate IS NOT NULL;

 */
