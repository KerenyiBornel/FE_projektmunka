import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Weather} from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat: number, lon: number):Observable<Weather>{
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', environment.weather_apikey)

    return this.http.get<Weather>(environment.weather_apiURL, {params:params}).pipe()
  }
}
