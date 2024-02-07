package com.trackflow.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trackflow.backend.entities.Login;
import com.trackflow.backend.repositories.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository lrepo;
	
	public Login getLogin(String uid, String pwd) {
		Login l;
		Optional<Login> ol = lrepo.getLogin(uid, pwd);
		try {
			l = ol.get();
		}catch(Exception e) {
			l = null;
		}
		return l;
	}
	
}
