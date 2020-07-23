export interface Flights {
	data: [{
		price: number,
		bags_price: {
			1?: number,
		},
		distance: number,
	}]
}