import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//In Ionic v4, "major changes were made to navigation and routing"
//NavController and ion-nav have now been deprecated

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewHome() {
    this.router.navigate([''])
  }

}
