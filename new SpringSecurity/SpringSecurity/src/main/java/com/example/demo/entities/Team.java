package com.example.demo.entities;
import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name="teams")
public class Team {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int teamid;
	
	@Column
	int pid;
	
	@Column
	int empid;
	
	@Column
	String comments;
	
	@Column
	Date assigneddate;
	
	@Column
	boolean status;
	
	@Column
	Date releasedate;
	
	
	
}
