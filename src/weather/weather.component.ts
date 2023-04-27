import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {Weather} from "./models/weather";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'weather-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  WeatherData:any;

  cityForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder,

  ) { }

  onSubmit(){
    const cityName = this.cityForm.value.name;
    if(cityName) {
      this.getWeatherDataByCityName(cityName);
    }
  }

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
      this.WeatherData = response;
    })
  }

  getWeatherDataByCityName(cityName: string) {
    this.weatherService.getWeatherDataByCityName(cityName).subscribe((response: Weather) => {
      this.WeatherData = response;
    });
  }


}
