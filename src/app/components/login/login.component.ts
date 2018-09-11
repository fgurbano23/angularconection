import { Component, OnInit } from '@angular/core';
import {UserAccoutModel} from '../../models/userAccout.model';
import {MyService} from '../../services/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyService]
})
export class LoginComponent {
  public aux: any;
  public userAccount: UserAccoutModel;

  constructor(private _service: MyService) {
    this.userAccount = new UserAccoutModel('', '');
  }
  onSubmit() {
    this._service.authUser(this.userAccount).subscribe(
      result => {
        console.log(result);
        console.log(typeof result);
        // console.log(this.aux);
      },
      error => {
        console.log(error);
      }
    );
  }


}
