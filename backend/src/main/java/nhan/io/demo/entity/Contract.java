package nhan.io.demo.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nhan.io.demo.enums.ContractStatus;

@Entity
@Table(name = "contract")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer contractId;

    private String contractName;

    private Integer salary;

    private LocalDate startDate;

    private LocalDate endDate;

    private ContractStatus contractStatus;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    public String toString() {
        return "Contract [contractId=" + contractId + ", contractName=" + contractName + ", salary=" + salary
                + ", startDate=" + startDate + ", endDate=" + endDate + ", contractStatus=" + contractStatus
                + ", employee=" + employee + "]";
    }
}
