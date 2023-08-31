import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'Primera API con angular';
  users: any = [];
  newUser: any = {};

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.allUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  insert(user: any): void {
    this.userService.insert(user).subscribe(() => {
      console.log('Usuario agregado exitosamente');
      this.loadUsers();
      this.newUser = {};
    });
  }

  update(id: number, user: any): void {
    this.userService.update(id, user).subscribe(() => {
      console.log('Usuario actualizado exitosamente');
      this.loadUsers();
    });
  }

  delete(id: number): void {
    this.userService.delete(id).subscribe(() => {
      console.log('Usuario eliminado exitosamente');
      this.loadUsers();
    });
  }
}

