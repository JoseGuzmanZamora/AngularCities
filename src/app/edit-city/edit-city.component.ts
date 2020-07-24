import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Input() edit_url: boolean;
  @Output() back = new EventEmitter<string>();
  @Output() back_url = new EventEmitter<string>();

  url:string = '';

  constructor(private cityService:CityService, private location: Location) { }

  ngOnInit(): void {
  }

  editCity(): void{
    this.cityService.updateCity(this.city).subscribe(
      res => this.backDetail()
    );
  }

  editUrl():void {
    this.cityService.updateUrl(this.city.id, this.url).subscribe(
      res => {
        this.city.img_url = this.url;
        this.backUrl();
      }
    );
  }

  backDetail():void{
    this.back.emit('back');
  }

  backUrl():void{
    this.back_url.emit('back_url');
  }
}
