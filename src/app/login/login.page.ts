import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { NavController, NavParams, AlertController } from '@ionic/angular';
//import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  
  constructor(public navCtrl: NavController, public alertController: AlertController) {

   }

 ngOnInit() {
  }

  viewHome() {
    this.navCtrl.navigateRoot('');
  }

  login(){
    
  }
  
  
  /*async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'You have successfully logged in!',
      buttons: ['OK']
    });

    await alert.present();
  }*/
}
