import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherResponse} from "../models/weatherResponse";
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

    return this.http.get<WeatherResponse>(environment.weather_apiURL, {params:params}).pipe(
      map((response: WeatherResponse ) => {
          return this.setWeatherData(response)
      })
    )
  }

  getWeatherDataByCityName(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', environment.weather_apikey);

    return this.http.get<WeatherResponse>(environment.weather_apiURL, {params}).pipe(
      map((response: WeatherResponse) => {
        return this.setWeatherData(response);
      })
    );
  }


  setWeatherData(data: WeatherResponse): Weather{
    const sunsetTime = new Date(data.sys.sunset * 1000);
    return {
      cityName: (data.name),
      sunsetTime: sunsetTime.toLocaleTimeString(),
      isDay: (new Date().getTime() < sunsetTime.getTime()),
      tempCelcius: (data.main.temp - 273.15),
      tempMin: (data.main.temp_min - 273.15),
      tempMax: (data.main.temp_max - 273.15),
      tempFeelsLike: (data.main.feels_like - 273.15),
      humidity: (data.main.humidity)
    };
  }
}
