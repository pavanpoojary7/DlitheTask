package poc.basic.react.bootcampPOC.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Toll {
	@Id
	private String vehicleNumber;
	
	private String ownerName, vendor;
	
	private Integer id, balance, transactions;
	
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnername(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getBalance() {
		return balance;
	}
	public void setBalance(Integer balance) {
		this.balance = balance;
	}
	public Integer getTransactions() {
		return transactions;
	}
	public void setTransaction(Integer transactions) {
		this.transactions = transactions;
	}
	

}
