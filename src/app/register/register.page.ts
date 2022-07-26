import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  viewHome() {
    this.navCtrl.navigateRoot('');
  }
}
