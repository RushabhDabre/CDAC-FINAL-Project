package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.CreateProject;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Project;
import com.example.demo.services.ClientService;
import com.example.demo.services.EmployeeService;
import com.example.demo.services.ProjectService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
	
	@Autowired
	ProjectService pservice;
	
	@Autowired
	ClientService cservice;
	
	@Autowired
	EmployeeService eservice;
	
	@GetMapping("/getAllProjects")
	public List<Project> getAllProjects(){
		return pservice.getAll();
	}
	
	@PostMapping("/createProject")
	public Project insertProject(@RequestBody CreateProject project) {
		Client c = cservice.getById(project.getClientid());
		Employee e = eservice.getEmpById(project.getEmpid());
		
		Project p = new Project(project.getTitle(), project.getTechstack(), project.getDescription(), project.getDeadline(), project.getStatus(), project.getComments(), e, c);
		
		return pservice.InsertProject(p);
	}
	
	@GetMapping("/getClients")
	public List<Client> getAllClients()
	{
		return cservice.getAllClient();
	}
	
}
