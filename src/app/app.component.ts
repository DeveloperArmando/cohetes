import { Component } from '@angular/core';
import { Rocket } from './model/rocket';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rockets: Rocket[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Rocket[]>('https://api.spacexdata.com/v4/rockets').subscribe(data => {
      console.log('data', data);

      this.rockets = data;
    });
  }

}
