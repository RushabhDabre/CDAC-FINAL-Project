package com.example.demo.entities;

import java.util.Date;

public class AddEmployee {

		//Dummy Entity
		String username,password,nationality,fullname,gender,email,phNo,currentAddress,permanentAddress,designation;
		double basicSal,incentives;
		Date hireDate,dob;
		
		public String getNationality() {
			return nationality;
		}
		public void setNationality(String nationality) {
			this.nationality = nationality;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getFullname() {
			return fullname;
		}
		public void setFullname(String fullname) {
			this.fullname = fullname;
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
		public String getDesignation() {
			return designation;
		}
		public void setDesignation(String designation) {
			this.designation = designation;
		}
		public double getIncentives() {
			return incentives;
		}
		public void setIncentives(double incentives) {
			this.incentives = incentives;
		}
		public Date getHireDate() {
			return hireDate;
		}
		public void setHireDate(Date hireDate) {
			this.hireDate = hireDate;
		}
		public Date getDob() {
			return dob;
		}
		public void setDob(Date dob) {
			this.dob = dob;
		}
}
