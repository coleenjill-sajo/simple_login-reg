import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { Authenticator } from '../controller/authenticator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
    public alertController: AlertController,
    private router: Router,
    private auth: Authenticator) { }

  ngOnInit() {
  }

  async register(form){
    let name = form.value.name,
    email = form.value.email,
    pass = form.value.password;
    this.auth.register(email, pass, name)
      .then(state =>{
        this.router.navigate(['/helloworld']);
      })
      .catch(async err => {
        const alert = await this.alertController.create({
          header: 'Alert!',
          message: 'Invalid email/password',
          buttons: ['OK']
        });
        alert.present();
      })
  }

  viewHome() {
    this.navCtrl.navigateRoot('');
  }
}
