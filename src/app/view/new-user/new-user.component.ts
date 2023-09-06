import { UserService } from 'src/app/service/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(private router: Router, private userService: UserService){}

  newUser = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  post(values: any){
    this.userService.post(values).subscribe(data => {
      console.log(data);
    });
  }

  exit(){
    this.router.navigate(['dashboard']);
  }

}
