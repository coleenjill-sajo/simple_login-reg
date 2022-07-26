import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  viewHome() {
    this.navCtrl.pop();
  }

}
