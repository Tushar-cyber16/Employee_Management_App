package com.employeemanagement.employee_management.dao;

// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.employeemanagement.employee_management.model.Employee;

public interface employeeRepo extends MongoRepository <Employee, Long> {

    Employee findByAid(Long aid);

}
