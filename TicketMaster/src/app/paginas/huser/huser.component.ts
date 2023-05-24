import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../servicio/user-service.service';

@Component({
  selector: 'app-huser',
  templateUrl: './huser.component.html',
  styleUrls: ['./huser.component.css']
})
export class HUserComponent {
  userId?: string;
  userinfo: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Obtén el ID del usuario de la URL
      this.checkUserData();
    });
  }

  checkUserData() {
    if (this.userId) {
      console.log('User ID:', this.userId);

      this.userService.getinfous(this.userId).subscribe(
        response => {
          console.log('Response:', response);

          this.userinfo = response;
          if (this.userinfo.length > 0) {
            // Los datos del usuario existen, mostrar la barra de navegación y las páginas correspondientes
            console.log('Datos del usuario encontrados');
          } else {
            // Los datos del usuario no existen, redirigir a la página CreateDatosUsuarioComponent
            console.log('Datos del usuario no encontrados. Redireccionando...');
            this.router.navigate(['/user', this.userId, 'cdata']);
          }
        },
        error => {
          console.log('Error:', error);
          // Manejar el error
        }
      );
    }
  }



}
