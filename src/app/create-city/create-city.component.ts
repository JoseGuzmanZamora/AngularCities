import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  constructor(private cityService:CityService) { }

  new_city:City;

  ngOnInit(): void {
    this.new_city = {
      id:0,
      name:'',
      country:'',
      description:'',
      img_url:'',
      rating:0
    }
  }

  createCity():void{
    this.cityService.createCity(this.new_city).subscribe(city =>
      console.log("City created")
    );
  }

}
