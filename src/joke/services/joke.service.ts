import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Joke} from "../models/joke";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJokeFromAPI(): Observable<Joke>{
    return this.http.get<Joke>(environment.joke_url)
  }
}


