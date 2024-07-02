package nhan.io.demo.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employee")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employeeId;

    private String employeeName;

    private String employeePhoneNumber;

    private String employeeAddress;

    private String employeeGender;

    private String employeeDepartment;

    private String employeeSkills;

    // @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval =
    // true)
    // @JsonManagedReference
    // private List<Contract> contracts;

    public String toString() {
        return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", employeePhoneNumber="
                + employeePhoneNumber + ", employeeAddress=" + employeeAddress + ", employeeGender=" + employeeGender
                + ", employeeDepartment=" + employeeDepartment + ", employeeSkills=" + employeeSkills + "]";
    }
}
