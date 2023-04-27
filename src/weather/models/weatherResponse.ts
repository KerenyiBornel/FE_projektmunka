export interface WeatherResponse {

  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  sys:{
    type: number
    id: number
    country: number
    sunset: number
  }
  name: string
}
