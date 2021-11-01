package com.UsuariosAppBackend.insoftar.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.UsuariosAppBackend.insoftar.Entity.Persona;


public interface PersonaRepository extends JpaRepository<Persona, Integer>{

	Persona findById(int id);

}
