import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  singupform: FormGroup;

  isSubmitted = false;

  user: User = {}

  constructor(private router: Router, private formBuilder: FormBuilder, public auths: AuthService) { }

  ngOnInit(): void {

    this.auths.isuserExist = true;

    this.singupform = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      passwordd: ['', Validators.required],
      firestname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }


  isvalid() {

    if (this.formControls.name.valid && this.formControls.password.valid) {

      return true;
    }
    return false;
  }

  get formControls() {

    return this.singupform.controls;
  }

  signup() {
    if (this.formControls.name.valid && this.formControls.password.valid &&
      this.formControls.firestname.value && this.formControls.lastname.value
      && this.formControls.lastname.value) {
      this.user.name = this.formControls.name.value;
      this.user.password = this.formControls.password.value
      this.user.firestname = this.formControls.firestname.value;
      this.user.lastname = this.formControls.lastname.value;

      this.auths.singuptest(this.user);
    }

  }



}
