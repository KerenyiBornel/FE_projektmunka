import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./services/weather.service";
// import {Joke} from "../joke/models/joke";
import {Weather} from "./models/weather";

@Component({
  selector: 'weather-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  WeatherData:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.getWeatherData(lat, lon);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getWeatherData(lat: number, lon: number){
    this.weatherService.getWeatherData(lat,lon).subscribe((response: Weather ) => {
     this.setWeatherData(response)
    })
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
