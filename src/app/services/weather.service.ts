import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public url: string;
  public apikey: string;
  public urlfordays: string;

  constructor(
      public _http: HttpClient
  ) {
      this.url = GLOBAL.url;
      this.apikey = GLOBAL.apikey;
      this.urlfordays = GLOBAL.urlfordays;
  }

  getWeather(city: any): Observable<any> {
      const cabecera = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + city + this.apikey, {headers: cabecera});
  }

  getWeatherForDays(city: any): Observable<any> {
      const cabecera = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
      return this._http.get(this.urlfordays + city + this.apikey, {headers: cabecera});
  }

}
