import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.page.html',
  styleUrls: ['./helloworld.page.scss'],
})
export class HelloworldPage implements OnInit {

  catFact: any = {};

  constructor(private http: HttpClient) {

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

}
