package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;
import com.example.demo.entities.Project;
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
	
	public List<Team> teamList(int pid){
		Project p = prepo.findById(pid).get();
		return trepo.teamList(p);
	}
	
	public int removeMember(int empid) {
		try {
			Optional<Employee> empok = erepo.findById(empid);
			if(empok.isPresent()) {
				return trepo.removeMember(empid);
			}else {
				return 0;
			}
		}catch(Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
}
