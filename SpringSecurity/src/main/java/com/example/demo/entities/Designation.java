package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "designation")
public class Designation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int designationID;
	
	@Column
	String designationName;	
	
	public int getDesignationID() {
		return designationID;
	}

	public void setDesignationID(int designationID) {
		this.designationID = designationID;
	}

	public String getDesignationName() {
		return designationName;
	}

	public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}

}
