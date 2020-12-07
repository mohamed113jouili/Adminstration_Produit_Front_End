import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { Users } from 'src/app/Models/users';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  isemailvalid = false;
  isloading = false;
  isAuthenticate = false;
  iserror = false;
  s: string;
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: AuthService) { }
  us: Users = {
    "users": [
      {
        "id": 1,
        "name": "mohamed",
        "password": "1234"
      }
    ]
  }
  users: User[] = [

    {
      "id": 1,
      "name": "mohamed",
      "password": "1234"

    }

  ]
  ngOnInit(): void {
    //this.s=JSON.stringify(this.us);
    //localStorage.setItem("users",this.s);
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    var user: User = {
      "id": 1,
      "name": "mohamed",
      "password": "1234"

    };
    //console.log(localStorage.getItem('users'));
    this.isSubmitted = true;

    console.log(this.loginForm.value);
    this.isAuthenticate = false;

    if (this.formControls.name.valid && this.formControls.password.valid) {

      user.name = this.formControls.name.value
      user.password = this.formControls.password.value

      if (this.authservice.islogintest(user)) {
        this.isAuthenticate = true;
        this.router.navigateByUrl("/admin/all-client");

      }
      else {
        this.isAuthenticate = false;
      }
    }

  }

  isvalid() {

    if (this.formControls.name.valid && this.formControls.password.valid) {

      return true;
    }
    return false;
  }
  get formControls() {

    return this.loginForm.controls;
  }




}
