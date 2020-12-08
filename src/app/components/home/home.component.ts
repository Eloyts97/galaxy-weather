import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WeatherService]
})
export class HomeComponent implements OnInit {
  public data: any;
  public moreData: any;
  public icono: any;
  public horas: any;
  public activo: boolean = false;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    public weatherService: WeatherService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const city = params.city;
      this.getCity(city);
    });
  }

  getCity(city: any) {
      this.weatherService.getWeather(city).subscribe(
        response => {
          console.log(response);
          this.data = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  verMas() {
    this._route.params.subscribe(params => {
      const city = params.city;
      this.getCityWeatherForDays(city);
    });
    this.activo = true;
  }

  getCityWeatherForDays(city: any) {
    this.weatherService.getWeatherForDays(city).subscribe(
      response => {
        // console.log(response);
        this.moreData = response;
        this.horas = this.moreData.list;
        console.log(this.horas);
      },
      error => {
        console.log(error);
      }
    );
  }

}
