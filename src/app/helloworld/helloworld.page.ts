import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Authenticator } from '../controller/authenticator';
import { async } from '@firebase/util';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.page.html',
  styleUrls: ['./helloworld.page.scss'],
})
export class HelloworldPage implements OnInit {

  catFact: any = {};

  constructor(private http: HttpClient,
    private router: Router,
    private auth: Authenticator,
    private toastCtrl: ToastController) {

    this.runHttp();
   }

  ngOnInit() {
  }

  runHttp(){
    this.http.get('https://catfact.ninja/fact')
    .subscribe(data => {
      console.log(data)
      this.catFact = data;
    }, (error) =>{
      console.log(error)
    })
  }

  async logout(){
    this.auth.logout()
    .then(authState => {
      this.router.navigate(['/login']);
    })
    .catch(async err => {
      const toast = await this.toastCtrl.create({
        message: 'Logout Failed',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })
  }
}
