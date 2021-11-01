package com.UsuariosAppBackend.insoftar;

import org.hibernate.loader.plan.build.internal.LoadGraphLoadPlanBuildingStrategy;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import com.UsuariosAppBackend.insoftar.Entity.Persona;
import com.UsuariosAppBackend.insoftar.Iservice.PersonaServiceImp;
import com.UsuariosAppBackend.insoftar.Repository.PersonaRepository;

@SpringBootTest

class UsuariosAppBackendApplicationTests {
	
	@Mock
	PersonaRepository personaRepository;
	
	@Mock
	PersonaServiceImp personaServicesImp;
	
	
	private Persona persona;
	
	
	private static final Integer id = 1;
	private static final String nombre = "pepe";
	private static final String apellido = "arcila";
	private static final String cedula = "111132";
	private static final String telfono = "2323840";
	//private static final String telfono = null;
	private static final String correo = "pepe@gmail.com";
	
	
	@BeforeEach
	public void prepare() throws Exception{
		persona = new Persona();
		persona.setId(id);
		persona.setNombre(nombre);
		persona.setApellido(apellido);
		persona.setDocumento(cedula);
		persona.setEmail(correo);
		persona.setTelefono(telfono);
		
		personaServicesImp.agregar(persona);
	}
	

	@Test
	void testAdd() {
		personaServicesImp.agregar(persona);
		assertNotNull(persona);
		assertEquals(1, persona.getId());
		assertEquals("arcila", persona.getApellido());
		assertNotEquals("adksdkl", persona.getNombre());
		assertNotNull(persona.getTelefono(),"el telefono es nulo");

	}
	
	@Test
	void testEdit() {
		personaServicesImp.editar(persona);
		assertNotNull(persona);
		assertEquals(1, persona.getId());
		assertEquals("arcila", persona.getApellido());
		assertNotEquals("adksdkl", persona.getNombre());
		assertNotNull(persona.getTelefono(),"el telefono es nulo");
	}
	
	@Test
	void testlista() {
		List<Persona> pl = new ArrayList<Persona>();
		pl = personaServicesImp.listar();
		pl.add(persona);
		assertNotNull(pl);
		assertEquals(1, pl.size());
		assertEquals(nombre, pl.get(0).getNombre());
	}
	
	@Test
	public void testEliminar() {
		Persona prueba = personaServicesImp.eliminar(id);
		assertNotNull(prueba);
	}
	
	

}
