package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Project;
import com.example.demo.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
	
	@Query("select t from Team t where t.pid = :pid")
	//@Query(value="select e.fullname , t.comments, t.assigned_date from teams t join employees e on t.empid = e.empid join projects p on t.pid = p.pid where p.pid = ?1",nativeQuery = true)
	public List<Team> teamList(Project pid);
	
	@Modifying
	@Query(value="update teams set status = 0 where empid = ?1",nativeQuery = true)
	public int removeMember(int empid);

}
