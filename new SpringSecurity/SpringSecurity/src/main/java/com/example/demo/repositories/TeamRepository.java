package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
	
	@Query(value="select e.fullname , t.comments, t.assigned_date from teams t join employees e on t.empid = e.empid join projects p on t.pid = p.pid",nativeQuery = true)
	public List<Object> teamList();
}
