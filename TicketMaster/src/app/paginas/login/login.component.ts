import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../servicio/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  datosUser: any;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.userService.getUser(email, password).subscribe(
      (response: any) => {
        this.datosUser = response;
        console.log(this.datosUser);

        // Verificar si se obtuvo un usuario válido
        if (this.datosUser && this.datosUser.role) {
          const userRole = this.datosUser.role; // Obtener el rol del usuario
          const userid = this.datosUser.id;
          if (userRole === 'admin') {
            this.router.navigate(['/admin']); // Redirigir a la página de administrador
          } else {
            this.router.navigate(['/user', userid]); // Redirigir a la página de usuario con el ID del usuario
          }
        } else {
          alert('Contraseña incorrecta o usuario no registrado. Si no estás registrado, regístrate.');
        }
      },
      (error) => {
        alert('Ocurrió un error en la consulta. Por favor, inténtalo nuevamente.');
      }
    );
  }



}
