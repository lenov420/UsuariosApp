import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/persona.model";
import { PersonaService } from "../../services/persona.service";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-personas-registradas",
  templateUrl: "./personas-registradas.component.html",
  styleUrls: ["./personas-registradas.component.css"],
})
export class PersonasRegistradasComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[];
  constructor(public service: PersonaService) {}

  ngOnInit() {
    this.service.listarUsuario();
  }

  resetForm(form?: NgForm) {
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

  llenarForm(us: Usuario) {
    this.service.usuario = Object.assign({}, us);
  }

  eliminarUsuario(us: Usuario) {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Esta a punto de borrar a " + us.nombre,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5506b5",
      cancelButtonColor: "#6C757D",
      confirmButtonText: "Eliminar!",
    }).then((borrar) => {
      if (borrar) {
        this.service.deleteUsuario(us).subscribe((resp) => {
          this.service.listarUsuario();
          this.resetForm();
        });
      }
    });
  }
}
