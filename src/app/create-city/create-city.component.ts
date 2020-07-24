import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  blank_city:City;
  @Output()
  refresh = new EventEmitter<string>();
  @Output()
  back = new EventEmitter<string>();

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
    this.cityService.createCity(this.new_city)
      .subscribe(() => {
        this.refresh.emit('refresh');
        this.new_city = {
          id:0,
          name:'',
          country:'',
          description:'',
          img_url:'',
          rating:0
        } 
      }
    );
  }

  backCity():void{
    this.back.emit('back');
  }

}
