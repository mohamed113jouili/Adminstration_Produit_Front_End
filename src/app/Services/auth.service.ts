import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { map } from 'rxjs/operators';
import { ResponseAuth } from '../Models/response-auth';
import { Users } from '../Models/users';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersa = [{}, {}, {}];
  s: string;
  sl: string;
  isSubmitted = false;
  isuserExist: boolean = false;
  isloginn: boolean = false;
  private isUserExist = new Subject<boolean>();
  isnamecorrect: boolean = false;
  ispasswordcorrect: boolean = false
  cu = new BehaviorSubject<User[]>([]);

  us: Users = {
    "users": [

      {
        "id": 1,
        "name": "mohamed",
        "password": "1234"

      }

    ]
  }
  user: User = {

    "id": 2,
    "name": ""
  }

  constructor(public http: HttpClient, private router: Router, private localstorage: LocalStorage) {

    var a: User[] = [];
    a = JSON.parse(localStorage.getItem('session'));

    console.log(a)
    if (a === null) {
      console.log("is null")
      var b: User[] = [];
      b.push(JSON.parse(localStorage.getItem('session')));
      localStorage.setItem('session', JSON.stringify(b));
    }

  }


  Login() {

    return this.http.get<ResponseAuth>("http://api.weatherstack.com/current?access_key=dc7a59eb5ab916e851992f7e1bc7df95",)
      .pipe(map(resp => resp));

  }

  singuptest(user: User) {
    //localStorage.removeItem('session')

    var a: User[] = [];

    a = JSON.parse(localStorage.getItem('session'));
    a = a.filter(function (el) {
      return el != null;
    });
    a.map((s, i) => { s.id = i })

    if (typeof (a.find(findname)) == "undefined") {
      a.push(user)
      this.isUserExist.next(false);
      this.isuserExist = false;
      this.navigateToLogin();


    }
    else {
      console.log("user exist")
      this.isUserExist.next(true)
      this.isuserExist = true;
    }

    localStorage.setItem('session', JSON.stringify(a));

    console.log("after ...", localStorage.getItem('session'));

    var b: User[] = [];


    b = JSON.parse(localStorage.getItem('session'));

    function findname(k) {
      return k.name === user.name;

    }

  }


  ifUserExist(): Observable<boolean> {


    return this.isUserExist.asObservable()
  }


  iSUserExist() {
    return this.isuserExist
  }

  navigateToLogin() {

    setTimeout(() => {
      this.router.navigateByUrl("/login");
    }, 2000);

  }


  islogin(user: User) {

    function findname(n) {
      return n.name === user.name;
    }
    function findpassword(p) {
      return p.password === user.password;
    }
    var a: User[] = [];


    a = JSON.parse(localStorage.getItem('session'));

    a = a.filter(function (el) {
      return el != null;
    });
    //console.log("if user exist "+a.find(q=>{q=user})) 
    if (typeof (a.find(findname)) == user.name && typeof (a.find(findpassword)) == user.password) {



      this.isloginn = true;


    }
    else {
      this.isloginn = false;
    }
    return this.isloginn
  }


  islogintest(user: User) {

    var a: User[] = [];


    a = JSON.parse(localStorage.getItem('session'));
    a = a.filter(function (el) {
      return el != null;
    });

    if (typeof (a.find(findname)) == "undefined") {

      console.log("user not exist ")
      this.isnamecorrect = false;
      // this.isloginn=
    }
    else {
      console.log("user  exist ")
      this.isnamecorrect = true;

    }

    if (typeof (a.find(findpassword)) == "undefined") {

      console.log(" password user not exist ")
      this.ispasswordcorrect = false;
    }
    else {
      console.log(" password user  exist ")
      this.ispasswordcorrect = true;

    }


    function findname(k) {
      return k.name === user.name;
    }

    function findpassword(k) {
      return k.password === user.password;
    }
    return this.isnamecorrect && this.ispasswordcorrect
  }
  getcurrentUsers() {
    var a: User[] = [];
    a = JSON.parse(localStorage.getItem('session'));
    a = a.filter(function (el) {
      return el != null;
    });

    this.cu.next(a)

    return this.cu.value
  }
  deleteUser(name: string) {

    var a: User[] = [];

    a = JSON.parse(localStorage.getItem('session'));
    a = a.filter(function (el) {
      return el != null;
    });

    a = a.filter(findname)

    //a.forEach(a=>{console.log(a.name)})
    localStorage.setItem('session', JSON.stringify(a));

    this.cu.next(this.cu.value.filter(findname))

    function findname(k) {
      return k.name !== name;
    }

  }

}
