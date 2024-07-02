package nhan.io.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import nhan.io.demo.entity.Employee;
import nhan.io.demo.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:4200")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    /**
     * Save or update an employee.
     *
     * @param employee the employee to be saved or updated
     * @return the saved or updated employee
     */
    @PostMapping("/employee/save")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    /**
     * Retrieves a list of all employees.
     *
     * @return A list of Employee objects representing all employees.
     */
    @GetMapping("/employee/get")
    public List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    /**
     * Retrieves an employee by their ID.
     *
     * @param id the ID of the employee to retrieve
     * @return the employee with the specified ID, or null if not found
     */
    @GetMapping("/employee/get/{id}")
    public Employee getEmployee(@PathVariable Integer id) {
        return employeeService.getEmployee(id);
    }

    /**
     * Deletes an employee by their ID.
     *
     * @param id the ID of the employee to be deleted
     * @return void
     */
    @DeleteMapping("/employee/delete/{id}")
    public void deleteEmployee(@PathVariable Integer id) {
        employeeService.deleteEmployee(id);
    }
}
