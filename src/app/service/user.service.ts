import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../model/users.model';
import { IUser } from 'src/app/model/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/api/users';


  constructor(private http: HttpClient) { }


  allUsers(): Observable<IUsers>{
    return this.http.get<IUsers>(this.apiUrl);
  }

  getUser(id: number): Observable<IUsers>{
    return this.http.get<IUsers>(`${this.apiUrl}/${id}`);
  }

  put(values: IUsers): Observable<IUsers> {
    return this.http.put<IUsers>(`${this.apiUrl}/${values.id}`, values);
  }

  delete(value: IUsers): Observable<IUsers>{
    return this.http.delete<IUsers>(this.apiUrl);
  }

  post(value: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.apiUrl, value);
  }

}
