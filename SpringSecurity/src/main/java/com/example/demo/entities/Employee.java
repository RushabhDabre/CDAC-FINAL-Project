package com.example.demo.entities;

import java.util.Date;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Table(name="employees")
public class Employee {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int empId;
		
		@Column
		String fullName;
		
		@Column
		Date dob;
		
		@Column
		String gender;
		
		@Column
		String nationality;

		@Column
		String email;
			
		@Column
		String phNo;
		
		@Column
		String currentAddress;
		
		@Column
		String permanentAddress;
		
		@Column
		double basicSal;
		
		@Column
		Date hireDate;
		
		@Column
		double incentives;
		
		String designation;
		
		@OneToOne
		@JoinColumn(name = "login_id")
		Login login_id;

		public Employee(String fullName, Date dob, String gender, String nationality, String email, String phNo,
				String currentAddress, String permanentAddress, double basicSal, Date hireDate, double incentives,
				String designation, Login login_id) {
			super();
			this.fullName = fullName;
			this.dob = dob;
			this.gender = gender;
			this.nationality = nationality;
			this.email = email;
			this.phNo = phNo;
			this.currentAddress = currentAddress;
			this.permanentAddress = permanentAddress;
			this.basicSal = basicSal;
			this.hireDate = hireDate;
			this.incentives = incentives;
			this.designation = designation;
			this.login_id = login_id;
		}

		public int getEmpId() {
			return empId;
		}

		public void setEmpId(int empId) {
			this.empId = empId;
		}

		public String getFullName() {
			return fullName;
		}

		public void setFullName(String fullName) {
			this.fullName = fullName;
		}

		public Date getDob() {
			return dob;
		}

		public void setDob(Date dob) {
			this.dob = dob;
		}

		public String getGender() {
			return gender;
		}

		public void setGender(String gender) {
			this.gender = gender;
		}

		public String getNationality() {
			return nationality;
		}

		public void setNationality(String nationality) {
			this.nationality = nationality;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPhNo() {
			return phNo;
		}

		public void setPhNo(String phNo) {
			this.phNo = phNo;
		}

		public String getCurrentAddress() {
			return currentAddress;
		}

		public void setCurrentAddress(String currentAddress) {
			this.currentAddress = currentAddress;
		}

		public String getPermanentAddress() {
			return permanentAddress;
		}

		public void setPermanentAddress(String permanentAddress) {
			this.permanentAddress = permanentAddress;
		}

		public double getBasicSal() {
			return basicSal;
		}

		public void setBasicSal(double basicSal) {
			this.basicSal = basicSal;
		}

		public Date getHireDate() {
			return hireDate;
		}

		public void setHireDate(Date hireDate) {
			this.hireDate = hireDate;
		}

		public double getIncentives() {
			return incentives;
		}

		public void setIncentives(double incentives) {
			this.incentives = incentives;
		}

		public String getDesignation() {
			return designation;
		}

		public void setDesignation(String designation) {
			this.designation = designation;
		}

		public Login getLogin_id() {
			return login_id;
		}

		public void setLogin_id(Login login_id) {
			this.login_id = login_id;
		}

}
