import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  public cities: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // OBTENER CIUDADES BUSCADAS DEL LOCALSTORAGE
    this.cities = JSON.parse(localStorage.getItem('cities') || '{}');
    this.cities = this.cities ? (this.cities as unknown as string).split(',') : [];
    // ELIMINAMOS LAS DUPLICADAS DEL ARRAY
    this.cities = Array.from(new Set(this.cities));
    console.log(this.cities);
  }

}
