package com.example.demo.controllers;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AddMember;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Project;
import com.example.demo.entities.Team;
import com.example.demo.services.EmployeeService;
import com.example.demo.services.ProjectService;
import com.example.demo.services.TeamService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {
	@Autowired
	TeamService tservice;
	
	@Autowired
	EmployeeService eservice;
	
	@Autowired
	ProjectService pservice;

	@GetMapping("/createTeam")
	public Team addTeam(@RequestBody AddMember meme) {
		Employee e = eservice.getEmpById(meme.getEmpid());
		Project p = pservice.getById(meme.getPid());
		LocalDate asignedtime =  LocalDate.now();
		java.sql.Date cdate = java.sql.Date.valueOf(asignedtime);
		Team t = new Team(meme.getComments(), cdate, true, e, p);
		
		return tservice.createTeam(t);
	}
}
