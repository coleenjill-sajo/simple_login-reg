import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isModalOpen = false;

  constructor(public navCtrl: NavController) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  viewLogin() {
    this.navCtrl.navigateForward('login');
  }

  viewReg(){
    this.navCtrl.navigateForward('register');
  }

}