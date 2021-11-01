import { Component, OnInit } from "@angular/core";
import { PersonaService } from "src/app/services/persona.service";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { Usuario } from "src/app/models/persona.model";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  listPersonas: Usuario[];
  constructor(public service: PersonaService) {}

  ngOnInit() {
    this.resetFormulario();
  }

  resetFormulario(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.usuario = {
      id: null,
      nombre: "",
      apellido: "",
      documento: null,
      telefono: null,
      email: "",
    };
  }

  onGuardar(form: NgForm) {
    this.listPersonas = this.service.usuarios;

    if (form.value.id == null) {
      const result = this.isDataValid(this.listPersonas, form);
      if (result) {
        this.insertarUsuario(form);
      }
    } else {
      const demasPersonas = this.listPersonas.filter(
        (persona) => persona["id"] != form.value.id
      );
      const result = this.isDataValid(demasPersonas, form);
      if (result) {
        this.updateUsuario(form);
      }
    }
  }

  isDataValid(personas: Usuario[], form: NgForm): boolean {
    const isEmailRepeated = personas.filter(
      (person) => person["email"] == form.value.email
    );
    const isDocRepeated = personas.filter(
      (person) => person["documento"] == form.value.documento
    );

    if (isEmailRepeated.length) {
      Swal.fire("Error", "El correo ya existe", "error");
      return false;
    }
    if (isDocRepeated.length) {
      Swal.fire("Error", "La cedula ya existe", "error");
      return false;
    }
    return true;
  }

  onReset(form: NgForm) {
    this.resetFormulario(form);
  }

  insertarUsuario(form: NgForm) {
    this.service.createUsuario(form.value).subscribe((res) => {
      console.log("rres", res);

      Swal.fire("Usuario Registrado");
      this.resetFormulario(form);
      this.service.listarUsuario();
    });
  }

  updateUsuario(form: NgForm) {
    this.service.updateUsuario(form.value, form.value.id).subscribe((res) => {
      Swal.fire("usuario modificado");
      this.resetFormulario(form);
      this.service.listarUsuario();
    });
  }
}
