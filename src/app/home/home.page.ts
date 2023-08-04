import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';
import { GeolocationService } from '../services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  weatherData: any;

  
  constructor(private geolocationService: GeolocationService,private weatherService: WeatherService) {}
  
  ngOnInit() {
    this.getWeatherByLocation();
  }
 
  getWeatherByLocation() {
    this.geolocationService.getCurrentPosition()
      .then((position: any) => {
        const latitude = position.latitude;
        const longitude = position.longitude;
        this.weatherService.getWeatherByCoords(latitude, longitude)
          .subscribe(
            {
              next: (data) => this.weatherData = data,
              error : (error) => console.log(error),
            })
      })
      .catch(error => {
        console.error(error);
        // Tratar os erros dps.
      });
  }
  
}
