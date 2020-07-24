export interface City {
	name: string,
	airportCode: string,
	weather?: any,
	flights?: any,
	image?: {
		name: string,
		copyright: string,
		caption: string,
	}
}