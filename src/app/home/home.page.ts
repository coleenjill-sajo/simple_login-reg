import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  presentingElement = undefined;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {}

  ngOnInit(){
    this.presentingElement = document.querySelector('.ion-page');
  }

  canDismiss =async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Close modal?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  }
  
  viewLogin() {
    this.navCtrl.navigateForward('login');
  }

  viewReg(){
    this.navCtrl.navigateForward('register');
  }

}