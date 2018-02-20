import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public User = {
		fname: '',
		lname: '',
    dob: '',
    password:'',
    rpassword:'',
    accountName:'',
    gender:'',
	};
  public users: any = [];
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.users.push(this.User);
    this.User={
      fname: '',
		lname: '',
    dob: '',
    password:'',
    rpassword:'',
    accountName:'',
    gender:'',
    };
   
  }
  remove(i) {
    this.users.splice(i, 1);
  }
}
