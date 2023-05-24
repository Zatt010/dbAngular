import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './paginas/home/home.component';
import { HUserComponent } from './paginas/huser/huser.component';
import { HAdminComponent } from './paginas/hadmin/hadmin.component';
import { MadminsComponent } from './paginas/admin/madmins/madmins.component';
import { UserComponent } from './paginas/user/user.component';
import { CreateEventComponent } from './paginas/create-event/create-event.component';
import { AdminTicketsComponent } from './paginas/admin-tickets/admin-tickets.component';
import { DatosUsuarioComponent } from './paginas/datos-usuario/datos-usuario.component';
import { CreateDatosUsuarioComponent } from './paginas/create-datos-usuario/create-datos-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    HUserComponent,
    HAdminComponent,
    MadminsComponent,
    UserComponent,
    CreateEventComponent,
    AdminTicketsComponent,
    DatosUsuarioComponent,
    CreateDatosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
