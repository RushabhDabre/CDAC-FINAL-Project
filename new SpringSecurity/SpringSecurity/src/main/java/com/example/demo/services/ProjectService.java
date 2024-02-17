package com.example.demo.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Project;
import com.example.demo.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	ProjectRepository prepo;
	
	public List<Project> getAll(){
		return prepo.findAll();
	}
	
	public Project getById(int id) {
		Optional<Project> op = prepo.findById(id);
		Project p;
		try {
			p = op.get();
		}catch(Exception e) {
			e.printStackTrace();
			p = null;
		}
		return p;
	}
	
	public Project InsertProject(Project project) {
		Project saved = null;
		try {
			saved = prepo.save(project);
		}catch(Exception e) {
			saved = null;
			e.printStackTrace();
		}
		return saved;
	}
}
