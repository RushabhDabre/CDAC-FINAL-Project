package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Team;
import com.example.demo.repositories.EmployeeRepository;
import com.example.demo.repositories.ProjectRepository;
import com.example.demo.repositories.TeamRepository;

@Service
public class TeamService {
	@Autowired
	TeamRepository trepo;

	@Autowired
	EmployeeRepository erepo;

	@Autowired
	ProjectRepository prepo;

	public Team createTeam(Team team) {
		Team saved = null;
		try {
			saved = trepo.save(team);
		}catch(Exception e) {
			saved = null;
			e.printStackTrace();
		}
		return saved;
	}
	
	public List<Object> teamList(){
		return trepo.teamList();
	}
}
