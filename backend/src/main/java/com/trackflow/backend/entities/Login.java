package com.trackflow.backend.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="login")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	
	@Column
	boolean status;	
	
//	@OneToOne(mappedBy = "user")
//	Employee employee;
}
