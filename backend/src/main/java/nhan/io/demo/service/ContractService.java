package nhan.io.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nhan.io.demo.entity.Contract;
import nhan.io.demo.exception.EntityNotFoundException;
import nhan.io.demo.repository.ContractRepo;

@Service
public class ContractService {

    @Autowired
    private ContractRepo contractRepo;

    public Contract saveContract(Contract contract) {
        return contractRepo.save(contract);
    }

    public List<Contract> getContracts() {
        return contractRepo.findAll();
    }

    public Contract getContract(Integer id) {
        Optional<Contract> contractOp = contractRepo.findById(id);
        if (contractOp.isPresent())
            return contractOp.get();
        else {
            throw new EntityNotFoundException("Contract with " + id + " not found");
        }
    }

    public void deleteContract(Integer id) {
        contractRepo.deleteById(id);
    }
}
