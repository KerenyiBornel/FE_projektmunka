import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJokeFromAPI(): Observable<any>{
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}


