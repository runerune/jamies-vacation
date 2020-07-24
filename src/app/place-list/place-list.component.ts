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
			{ 
				name: 'Amsterdam', 
				airportCode: 'AMS',
				image: {
					name: 'amsterdam.jpg',
					copyright: '(CC) Jorge Royan, 2008',
					caption: 'Street scene. Boathouse in an Amsterdam Channel. The Netherlands',
				}
			}, { 
				name: 'Madrid', 
				airportCode: 'MAD',
				image: {
					name: 'madrid.jpg',
					copyright: '(CC) jsogo, 2009',
					caption: 'Royal Palace and Almudena Cathedral',
				}
			}, { 
				name: 'Budapest', 
				airportCode: 'BUD',
				image: {
					name: 'budapest.jpg',
					copyright: '(CC) Dennis Jarvis, 2012',
					caption: ('There are great views of the Pest side from the Fisherman\'s Bastion. '+
						'The main one is a view of the parliament building.'),
				}
			}
		];
	}

}
