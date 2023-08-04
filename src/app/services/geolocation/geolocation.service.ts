import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {

  constructor() { }

  async getCurrentPosition(): Promise<any> {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log(position.coords, position);
      return position.coords;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}