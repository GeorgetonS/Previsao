import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';
import { GeolocationService } from '../services/geolocation/geolocation.service';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.page.html',
  styleUrls: ['./previsao.page.scss'],
})
export class PrevisaoPage implements OnInit {
  forecast: any;
  country: string = 'br';
  zip: string = '40000-000';

  constructor(private geolocationService: GeolocationService,private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherByZipCode();
  }
  
  getWeatherByZipCode() {
    this.weatherService.getWeatherByZipCode(this.zip,this.country)
    .subscribe(
      {
        next: (data) => {this.forecast = data; console.log(data)}, 
        error : (error) => console.log(error),
      });
  }

  formatDateAndHours(dateString: string): string {
    const parts = dateString.split(' ');
    const datePart = parts[0];
    const timePart = parts[1];
    const [year, month, day] = datePart.split('-');
    const formattedDate = `${day}/${month}/${year} as ${timePart}`;

    return formattedDate;
  }

  formatDate(dateString: string): string {
    const parts = dateString.split(' ');
    const datePart = parts[0];
    const [year, month, day] = datePart.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  formatHours(dateString: string): string {
    const parts = dateString.split(' ');
    const timePart = parts[1];
    const formattedDate = `${timePart}`;

    return formattedDate;
  }

  getTodayForecast(): any[]{
    const todayDate = new Date().toISOString().slice(0, 10); //'yyyy-MM-dd'
    return this.forecast?.list.filter((item: any) => item.dt_txt.includes(todayDate)) || [];
  }
}
