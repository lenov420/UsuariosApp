package com.UsuariosAppBackend.insoftar.Iservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.UsuariosAppBackend.insoftar.Entity.Persona;
import com.UsuariosAppBackend.insoftar.Repository.PersonaRepository;
import com.UsuariosAppBackend.insoftar.Service.PersonaService;

@Service
public class PersonaServiceImp implements PersonaService{
	
	@Autowired
	private PersonaRepository personaR;

	@Override
	public Persona agregar(Persona persona) {
		// TODO Auto-generated method stub
		return personaR.save(persona);
	}

	@Override
	public Persona editar(Persona persona) {
		

		// TODO Auto-generated method stub
		return personaR.save(persona);
	}

	@Override
	public List<Persona> listar() {
		// TODO Auto-generated method stub
		return personaR.findAll();
	}

	@Override
	public Persona eliminar(int id) {
		Persona per = personaR.findById(id);
		if(per != null) {
			personaR.delete(per);
		}
		return per;
	}

	@Override
	public Persona verId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
