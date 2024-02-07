package com.trackflow.backend.entities;

import java.util.*;
import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="roles")
public class Role {
	@Id
	int role_id;
	
	@Column
	String role_name;
	
//	@OneToMany(mappedBy = "role")
//	List<User> users;
}
