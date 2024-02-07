package com.trackflow.backend.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.trackflow.backend.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}