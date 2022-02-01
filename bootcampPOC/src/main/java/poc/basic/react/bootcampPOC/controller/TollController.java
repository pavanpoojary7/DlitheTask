package poc.basic.react.bootcampPOC.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import poc.basic.react.bootcampPOC.entity.Toll;
import poc.basic.react.bootcampPOC.services.TollServices;

@RestController
@RequestMapping("/toll")
//inform the backend and accept the request from url of react
@CrossOrigin(origins = "http://localhost:3000")

public class TollController {
 @Autowired
 TollServices service;
 
 @GetMapping("/listing")
 public List<Toll> hogan()
 {
	 return service.readEverything();
 }
 
}
