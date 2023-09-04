import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../model/users.model';
import { IUser } from '../model/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/api/users';


  constructor(private http: HttpClient) { }


  allUsers(): Observable<IUsers>{
    return this.http.get<IUsers>(this.apiUrl);
  }

  getUser(id: number): Observable<IUser>{
    return this.http.get<IUsers>(`${this.apiUrl}/${id}`);
  }

  put(values: IUser): Observable<IUser>{
    return this.http.put<IUsers>(this.apiUrl, values);
  }

  delete(value: IUser): Observable<IUser>{
    return this.http.delete<IUsers>(this.apiUrl);
  }

}
