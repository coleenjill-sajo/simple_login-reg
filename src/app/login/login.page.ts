import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController, NavParams, AlertController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { NavController, AlertController} from '@ionic/angular';
import { Authenticator } from '../controller/authenticator';
import { async } from '@firebase/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  
  constructor(private navCtrl: NavController,
    private auth: Authenticator,
    private router: Router,
    private alertCtrl: AlertController) {

   }

 ngOnInit() {
  }

  async login(form){
    let email = form.value.email,
    password = form.value.password;

    this.auth.login(email, password)
    .then(state =>{
      this.router.navigate(['/helloworld']);
    })
    .catch(async err => {
      const alert = await this.alertCtrl.create({
        header: 'Alert!',
        message: 'Invalid email/password',
        buttons: ['OK']    
      });
      alert.present();
      });
  }

  viewHome() {
    this.navCtrl.navigateRoot('');
  }
}
