import { Component, OnInit, DoCheck } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'galaxy-weather';
  faPlus = faPlus;

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

}
