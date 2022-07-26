import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { NavController, NavParams, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }

  viewHome() {
    this.navCtrl.navigateRoot('');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'You have successfully signed in!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
