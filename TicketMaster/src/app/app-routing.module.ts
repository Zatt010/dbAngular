import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { HomeComponent } from './paginas/home/home.component';
import { HUserComponent } from './paginas/huser/huser.component';
import { HAdminComponent } from './paginas/hadmin/hadmin.component';
import { MadminsComponent } from './paginas/admin/madmins/madmins.component';
import { UserComponent } from './paginas/user/user.component';
import{CreateEventComponent} from './paginas/create-event/create-event.component';
import{AdminTicketsComponent} from './paginas/admin-tickets/admin-tickets.component';
import{CreateDatosUsuarioComponent} from './paginas/create-datos-usuario/create-datos-usuario.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: HUserComponent
  },
  {
    path: 'user/:id/cdata',
    component: CreateDatosUsuarioComponent
  },
  {
    path: 'admin',
    component: HAdminComponent,
    children: [
      {
        path: 'madmins',
        component: MadminsComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'cevent',
        component: CreateEventComponent
      },
      {
        path: 'tickets',
        component: AdminTicketsComponent
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
