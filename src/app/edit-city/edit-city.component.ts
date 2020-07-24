import { Component, OnInit, Input} from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  @Input() city: City;

  constructor(private cityService:CityService, private location: Location) { }

  ngOnInit(): void {
  }

  editCity(): void{
    this.cityService.updateCity(this.city).subscribe(
      res => console.log(res)
    );
  }


}
