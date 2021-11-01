import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { PersonaService } from "src/app/services/persona.service";
import { PersonasRegistradasComponent } from "../personas-registradas/personas-registradas.component";
import { UsuariosComponent } from "./usuarios.component";

BrowserDynamicTestingModule

describe('UsuariosComponent', () => {
let componente:UsuariosComponent
let fixture:ComponentFixture<UsuariosComponent>
beforeEach(()=>{


  TestBed.configureTestingModule({
    declarations:[UsuariosComponent,PersonasRegistradasComponent],
    providers:[PersonaService,FormBuilder],
    imports:[HttpClientModule,FormsModule,ReactiveFormsModule,
    ,HttpClientTestingModule]
  })

  fixture = TestBed.createComponent( UsuariosComponent);
  componente = fixture.componentInstance;



  
});


it('Debe de crear un formulario con 5 cmapos', () => {

  expect(componente.usuariosForm.contains('nombre')).toBeTruthy();
  expect(componente.usuariosForm.contains('apellido')).toBeTruthy();
  expect(componente.usuariosForm.contains('telefono')).toBeTruthy();
  expect(componente.usuariosForm.contains('nomdocumentobre')).toBeTruthy();
  expect(componente.usuariosForm.contains('correo')).toBeTruthy();

  
});


  

    
  });



  