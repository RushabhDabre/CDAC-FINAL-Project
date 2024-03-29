package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Designation;
import com.example.demo.services.DesignationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DesignationController {
	@Autowired
	DesignationService dservice;
	
	@GetMapping("/getAllDesign")
	public List<Designation> getAll(){
		return dservice.getAll();
	}	
}