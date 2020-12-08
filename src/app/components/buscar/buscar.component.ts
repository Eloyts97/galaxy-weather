import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public city: any;
  public cities: string[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.city = '';
    /*this.cities = localStorage.getItem('cities');
    if (this.cities) {
      console.log('hay consultas anteriores');
      console.log(this.cities);
    } else {
      console.log('no hay consultas anteriores');
      localStorage.setItem('cities', JSON.stringify(''));
    }*/
  }

  onSubmit(form: any) {
    this.city = form.value.city.toLowerCase();

    this.cities = JSON.parse(localStorage.getItem('cities') || '{}');
    this.cities = this.cities ? (this.cities as unknown as string).split(',') : [];
    this.cities.push(this.city);
    localStorage.setItem('cities', JSON.stringify(this.cities.toString()));

    this._router.navigate(['home/' + this.city]);
  }

}
