import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { City } from '../interface/City';

@Component({
	selector: 'app-place',
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
	@Input() city: City;

	constructor() { }

	ngOnInit(): void {
		console.log(this.city);
	}


}
