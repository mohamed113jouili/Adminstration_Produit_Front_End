import { Component, OnInit } from '@angular/core';
import { Sauce } from 'protractor/built/driverProviders';
import { User } from '../Models/user';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=this.sau.getcurrentUsers()

  page = 1;
  pageSize = 4;
  collectionSize = this.users.length;
  constructor(public sau:AuthService ) { }
  ngOnInit(): void {
     this.refreshCountries();
    this.sau.getcurrentUsers() 

  }

getUsers(){
var a:User[] = []; 
  
    a = JSON.parse(localStorage.getItem('session'));
    a = a.filter(function (el) {
      return el != null;
    });
    return a;
}

refreshCountries() {
  this.sau.cu.value
  .map((user, i) => ({id: i + 1, ...user}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
