package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
   
	@Autowired
	LoginRepository lrepo;
	
//	public Login save(Login u)
//	{
//		return lrepo.save(u);
//	}
	
	public Login getUser(int id)
	{
		return lrepo.findById(id).get();
	}
	
//	public boolean approve(int id)
//	{
//		if (lrepo.approve(id) == 1)
//			return true;
//		else
//			return false;
//	}
}
