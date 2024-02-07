package com.trackflow.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.trackflow.backend.entities.Login;
import com.trackflow.backend.entities.LoginCheck;
import com.trackflow.backend.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("/chkLogin")
	public Login chkLogin(@RequestBody LoginCheck lcheck) {
		return lservice.getLogin(lcheck.getUsername(), lcheck.getPassword());
	}
}
