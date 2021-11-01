import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/persona.model";

@Injectable({
  providedIn: "root",
})
export class PersonaService {
  Url1p = "http://localhost:8090/Persona/All";
  Url2p = "http://localhost:8090/Persona/Add";
  Url3p = "http://localhost:8090/Persona/edit";
  Url4p = "http://localhost:8090/Persona/delete";
  Url5p = "http://localhost:8090/Persona/findById";

  usuarioId: any;
  usuario: Usuario;
  usuarios: Usuario[];

  constructor(public http: HttpClient) {}

  listarUsuario() {
    this.http.get(this.Url1p).subscribe((data: any) => {
      console.log(data);
      this.usuarios = data as Usuario[];
    });
  }

  deleteUsuario(usuario: Usuario) {
    return this.http.delete<Usuario>(this.Url4p + "/" + usuario.id);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.Url2p, usuario);
  }

  updateUsuario(usuario: Usuario, id: any) {
    return this.http.put<Usuario>(this.Url3p + "/" + id, usuario);
  }

  listarById(id: any) {
    console.log("id update", id);
    this.http.get(this.Url5p + "/" + id).subscribe((data: any) => {
      this.usuarioId = data as Usuario;
    });
  }
}
