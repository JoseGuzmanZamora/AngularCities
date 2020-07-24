import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cities:City[];
  create:boolean = false;

  // we inject the service by introducing it in the constructor
  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities():void{
    this.cityService.getCities().subscribe(
      cities => this.cities = cities.reverse()
    );
  }

  verificar():void{
    console.log(this.cities);
  }

  changeCreate():void{
    this.create = !this.create;
  }

}
