package com.UsuariosAppBackend.insoftar.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.UsuariosAppBackend.insoftar.Entity.Persona;
import com.UsuariosAppBackend.insoftar.Service.PersonaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/Persona")
public class PersonaController {
	
	@Autowired
	private PersonaService perService;
	
	@GetMapping("/All")
	public List<Persona> verTodo(){
		return perService.listar();
	}
	
	@GetMapping("/findById/{id}")
	public Persona verPorId(@PathVariable("id") int id){
		return perService.verId(id);
	}
	
	@PostMapping("/Add")
	public Persona agregar(@RequestBody Persona persona) {
		return perService.agregar(persona); 
	}
	
	@PutMapping("edit/{id}")
	public Persona editar(@RequestBody Persona per,@PathVariable("id") int id) {
		per.setId(id);
		return perService.editar(per);
	}
	
	@DeleteMapping("delete/{id}")
	public Persona eliminar(@PathVariable("id") int id) {
		return perService.eliminar(id);
	}
	
	

}
