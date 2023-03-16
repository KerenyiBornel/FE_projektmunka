import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'joke-root',
  template: '<div>{{ joke }}</div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  joke = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe((response: any) => {
      this.joke = response.value;
    });
  }
}

