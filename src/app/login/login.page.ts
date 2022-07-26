import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { HomePage } from '../home/home.page';

//In Ionic v4, "major changes were made to navigation and routing"
//NavController and ion-nav have now been deprecated, as Angular routing has been used in the new version

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  viewHome() {
    this.navCtrl.navigateRoot('');
  }

}
