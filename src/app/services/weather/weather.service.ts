import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiKey = 'a7ee3e82946aaf238466fe8954b88ccc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiUrlZipCode = 'https://api.openweathermap.org/data/2.5/forecast';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCoords(latitude: number, longitude: number) {
    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }

  getWeatherByZipCode(zip: string, country : string) {
    const url = `${apiUrlZipCode}?zip=${zip},${country}&appid=${apiKey}&lang=pt_br&units=metric`;
    return this.http.get(url);
  }
}
