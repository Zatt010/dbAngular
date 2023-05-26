import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user-service.service';

@Component({
  selector: 'app-eventos-usuarios',
  templateUrl: './eventos-usuarios.component.html',
  styleUrls: ['./eventos-usuarios.component.css']
})
export class EventosUsuariosComponent {
  events: any[] = [];
  selectedEvent: any = null;
  ticketsAvailable: any[] = [];

  constructor(private eventService: UserService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showTickets(event: any): void {
    this.selectedEvent = event;
    this.eventService.getTicketEvent(event.cod_E).subscribe(
      (response) => {
        this.ticketsAvailable = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buyTicket(ticket: any): void {
    const cartItem = {
      userID: 1, // Replace with the actual user ID
      ticketID: ticket._id
    };
    this.eventService.createCart(cartItem).subscribe(
      (response) => {
        console.log('Ticket added to cart:', response);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    );
  }
}
