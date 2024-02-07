package com.trackflow.backend.entities;

//import java.util.Date;
//import jakarta.persistence.*;
//import lombok.*;
//
//@Setter
//@Getter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//public class Employee {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	int empId;
//	
//	@Column
//	String fullName;
//	
//	@Column
//	Date dob;
//	
//	@Column
//	String gender;
//	
//	@Column
//	String nationality;
//
//	@Column
//	String email;
//		
//	@Column
//	String phNo;
//	
//	@Column
//	String currentAddress;
//	
//	@Column
//	String permanentAddress;
//	
//	@Column
//	double basicSal;
//	
//	@Column
//	Date hireDate;
//	
//	@Column
//	double incentives;
//	
//	@OneToOne
//	@JoinColumn(name = "userId")
//	User user;
//	
//	@ManyToOne
//	@JoinColumn(name = "designationID")
//	Designation designation;
//	
//	@Column
//	Role roleId;
//	
//	@Column
//	Designation designationID;
//	
//}
