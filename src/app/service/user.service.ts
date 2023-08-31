import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8000/api/users';



  constructor(private http: HttpClient) { }

  allUsers(){
    return this.http.get(this.apiUrl);
  }

  insert(user: any){
    return this.http.post(this.apiUrl, user);
  }

  update(id: number, user: any){
    return this.http.put(this.apiUrl, user);
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }



}
