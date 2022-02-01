package poc.basic.react.bootcampPOC.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poc.basic.react.bootcampPOC.entity.Toll;
import poc.basic.react.bootcampPOC.repository.TollRepository;

@Service
public class TollServices {

	@Autowired
	TollRepository repo;
	
	public List<Toll> readEverything(){
		return repo.findAll();
	}
}
