import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'joke-root',
  template: '<h1>{{ joke }}</h1>',
})
export class JokeComponent implements OnInit {
  joke = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe((response: any) => {
      this.joke = response.value;
    });
  }
}

