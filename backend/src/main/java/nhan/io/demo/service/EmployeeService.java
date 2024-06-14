package nhan.io.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nhan.io.demo.entity.Employee;
import nhan.io.demo.exception.EmployeeNotFoundException;
import nhan.io.demo.repository.EmployeeRepo;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public Employee saveEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public List<Employee> getEmployees() {
        return employeeRepo.findAll();
    }

    public Employee getEmployee(Integer id) {
        Optional<Employee> employeeOp = employeeRepo.findById(id);
        if (employeeOp.isPresent())
            return employeeOp.get();
        else {
            throw new EmployeeNotFoundException("Employee with " + id + " not found");
        }
    }

    public void deleteEmployee(Integer id) {
        employeeRepo.deleteById(id);
    }
}
