package poc.basic.react.bootcampPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import poc.basic.react.bootcampPOC.entity.Toll;

@Repository
public interface TollRepository extends JpaRepository<Toll,String>{

}
