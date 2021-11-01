package com.UsuariosAppBackend.insoftar.Service;

import java.util.List;

import com.UsuariosAppBackend.insoftar.Entity.Persona;

public interface PersonaService {
	
	Persona agregar(Persona persona);
	Persona editar(Persona persona);
	List<Persona>listar();
	Persona verId(int id);
	Persona eliminar(int id);

}
