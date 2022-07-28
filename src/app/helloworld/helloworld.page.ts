import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.page.html',
  styleUrls: ['./helloworld.page.scss'],
})
export class HelloworldPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  //Error 401: Unauthorized
  runHttp(){
    this.http.get('https://api.spotify.com/v1/browse/new-releases')
    .subscribe(data => {
      console.log(data)
    }, (error) =>{
      console.log
    })
  }

}
