import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsuariosComponent } from "./usuarios/usuarios/usuarios.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PersonasRegistradasComponent } from "./usuarios/personas-registradas/personas-registradas.component";
import { ToastrModule } from "ngx-toastr";
import { PersonaService } from "./services/persona.service";
import { GlobalHttpInterceptorService } from "./error";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, UsuariosComponent, PersonasRegistradasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    PersonaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
