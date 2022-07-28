import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  runHttp(){
    this.http.get('https://api.spotify.com/v1/browse/new-releases')
    .subscribe(data => {
      console.log(data)
    })
  }
}
