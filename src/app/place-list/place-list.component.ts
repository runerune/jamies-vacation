import { Component, OnInit } from '@angular/core';
import { City } from '../interface/City';

@Component({
	selector: 'app-place-list',
	templateUrl: './place-list.component.html',
	styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
	cities: City[];

	constructor() { }

	ngOnInit(): void {
		this.cities = [
			{ name: 'Amsterdam', airportCode: 'AMS' },
			{ name: 'Madrid', airportCode: 'MAD' },
			{ name: 'Budapest', airportCode: 'BUD' }
		];
	}

}
