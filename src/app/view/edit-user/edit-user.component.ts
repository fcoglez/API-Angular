import { IUser } from './../../model/user.model';
import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  user: any;
  editUser = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService){}

  ngOnInit(){
    let idUser: any = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(idUser).subscribe(data => {
      let dataUser = []
      this.user = data;
      dataUser.push(data);
      this.editUser.setValue({
        name: this.user.name,
        surname: this.user.surname,
      });
    });
  }

  post(values: any){
    this.userService.put(values).subscribe(data => {
      console.log(data);
    });
  }

  delete(){
    console.log("eliminado");
  }


}
