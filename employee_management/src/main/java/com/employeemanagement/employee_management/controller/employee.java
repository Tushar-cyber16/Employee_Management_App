package com.employeemanagement.employee_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeemanagement.employee_management.dao.employeeRepo;
import com.employeemanagement.employee_management.model.Employee;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/employee")
public class employee {

    @Autowired
    employeeRepo repo;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @PostMapping
    public Employee createEmployee(@RequestBody Employee emp) {
        emp.setAid(sequenceGeneratorService.generateSequence(Employee.SEQUENCE_NAME));
        return repo.save(emp);
    }

    @GetMapping
    public List<Employee> getemployee() {
        return repo.findAll();
    }
    @GetMapping("/{aid}")
    public Employee getemployeebyId(@PathVariable("aid") long aid) {
        return repo.findByAid(aid);
    }

    @DeleteMapping("/{aid}")
    public String deleteemployee(@PathVariable("aid") long aid) {
        repo.deleteById(aid);
        return "employee deleted";
    }

    @PutMapping
    public Employee updateEmployee(@RequestBody Employee emp) {
        
        return repo.save(emp);
    }
    
    
}
