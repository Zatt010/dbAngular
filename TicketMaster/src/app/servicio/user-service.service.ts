import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/users?email=${email}&password=${password}`;
    return this.http.get<any>(url);
  }
  getmail(email: string): Observable<any> {
    const url = `${this.baseUrl}/user-by-email?email=${email}}`;
    return this.http.get<any>(url);
  }

  getinfous(id: string): Observable<any> {
    const url = `${this.baseUrl}/usersget?idu=${id}`;
    return this.http.get<any>(url);
  }

  createUser(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.baseUrl + "/create", JSON.stringify(data), { headers: headers });
  }

  createEvent(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.baseUrl + "/create_event", JSON.stringify(data), { headers: headers });
  }
  createTicket(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.baseUrl + "/Tickets_Create", JSON.stringify(data), { headers: headers });
  }

  createUs(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.baseUrl + "/createUs", JSON.stringify(data), { headers: headers });
  }

  verifyEmail(email:string): Observable<any> {
    const url = `${this.baseUrl}/users/exists?email=${email}`;
    return this.http.get<any>(url);
  }
  deleteUser(id: string): Observable<any> {
    const url = `${this.baseUrl}/usersd?id=${id}`;
    return this.http.delete<any>(url);
  }
  updateUser(user_id: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/usersUpdate?id=${user_id}`;
    return this.http.put<any>(url, data);
  }

  getUserByRole(role: string): Observable<any> {
    const url = `${this.baseUrl}/usersr?role=${role}`;
    return this.http.get<any>(url);
  }
  getEvents(): Observable<any[]> {
    const url = `${this.baseUrl}/Events`;
    return this.http.get<any[]>(url);
  }
}
