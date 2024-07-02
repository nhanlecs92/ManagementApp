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

import nhan.io.demo.entity.Contract;
import nhan.io.demo.service.ContractService;

@RestController
@CrossOrigin("http://localhost:4200")
public class ContractController {

    @Autowired
    private ContractService contractService;

    /**
     * Saves a contract by creating or updating it in the database.
     *
     * @param contract the contract object to be saved
     * @return the saved contract object
     */
    @PostMapping("/contract/save")
    public Contract saveContract(@RequestBody Contract contract) {
        Contract newContract = contractService.saveContract(contract);
        System.out.println(">>> New Contract:" + newContract);
        return newContract;
    }

    /**
     * Retrieves a list of all contracts.
     *
     * @return a list of Contract objects representing all contracts
     */
    @GetMapping("/contract/get")
    public List<Contract> getContracts() {
        return contractService.getContracts();
    }

    /**
     * Retrieves a contract by its ID.
     *
     * @param id the ID of the contract to retrieve
     * @return the contract with the specified ID, or null if not found
     */
    @GetMapping("/contract/get/{id}")
    public Contract getContract(@PathVariable Integer id) {
        return contractService.getContract(id);
    }

    /**
     * Deletes a contract by its ID.
     *
     * @param id the ID of the contract to be deleted
     */
    @DeleteMapping("/contract/delete/{id}")
    public void deleteContract(@PathVariable Integer id) {
        contractService.deleteContract(id);
    }
}
