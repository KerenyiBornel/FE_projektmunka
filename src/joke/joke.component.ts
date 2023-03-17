import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JokeService} from "./services/joke.service";

@Component({
  selector: 'joke-root',
  templateUrl: 'joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke = '';

  constructor(private jokeService:JokeService) {}

  ngOnInit() {
    this.jokeService.getJokeFromAPI().subscribe((response: any) => {
      this.joke = response.value;
    });
  }
}

