package nhan.io.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nhan.io.demo.entity.Contract;

@Repository
public interface ContractRepo extends JpaRepository<Contract, Integer> {

}
