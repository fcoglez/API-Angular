import { Component } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

import {IUser} from '../../model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users: any = "";

  constructor(private useService: UserService, private router: Router){}

  ngOnInit(){
    this.useService.allUsers().subscribe(data => {
      this.users = data;
    });
  }

  put(id: number){
    this.router.navigate(['edit-user', id]);
  }

  post(){
    this.router.navigate(['new-user']);
  }
}
